import { useEffect, useRef, useState } from "react";
import prgplane from "/src/assets/svg/progressplane.svg";

const ROTATION_OFFSET = 0;

const RoundProgressbar = ({
  title,
  target = 0,
  duration = 2500,
  size = 280,
  strokeWidth = 7,
  children,
  className = "",
}) => {
  const progressRef = useRef(null);
  const animationFrameRef = useRef(null);
  const hasStartedRef = useRef(false);
  const [progress, setProgress] = useState(0);

  const safeTarget = Math.min(100, Math.max(0, Number(target) || 0));
  const safeSize = Math.max(120, Number(size) || 280);
  const safeStrokeWidth = Math.min(20, Math.max(2, Number(strokeWidth) || 7));
  const safeDuration =
    Number(duration) === 0 ? 0 : Math.max(1, Number(duration) || 2500);
  const radius = 50 - safeStrokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const progressRatio = progress / 100;
  const pathAngle = -90 + progressRatio * 360;
  const pathRadians = (pathAngle * Math.PI) / 180;
  const planeX = 50 + radius * Math.cos(pathRadians);
  const planeY = 50 + radius * Math.sin(pathRadians);
  const planeRotation = pathAngle + 70 + ROTATION_OFFSET;

  useEffect(() => {
    const element = progressRef.current;
    if (!element || hasStartedRef.current) return undefined;

    const animateProgress = () => {
      if (hasStartedRef.current) return;

      hasStartedRef.current = true;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const linearProgress =
          safeDuration === 0 ? 1 : Math.min(elapsed / safeDuration, 1);
        const easedProgress = 1 - (1 - linearProgress) ** 3;

        setProgress(safeTarget * easedProgress);

        if (linearProgress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateProgress();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [safeDuration, safeTarget]);

  return (
    <div className={`flex w-full flex-col items-center gap-4 ${className}`}>
      <div
        ref={progressRef}
        role="progressbar"
        aria-label={title || "Circular progress"}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={Math.round(progress)}
        className="relative aspect-square max-w-full"
        style={{ width: `${safeSize}px` }}
      >
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full overflow-visible"
          aria-hidden="true"
        >
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={safeStrokeWidth}
            className="text-gray-200"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={safeStrokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progressRatio)}
            transform="rotate(-90 50 50)"
            className="text-primary"
          />
        </svg>

        <div className="pointer-events-none absolute inset-[20%] flex items-center justify-center text-center">
          {children}
        </div>

        <div
          className="pointer-events-none absolute h-[21%] w-[21%]"
          style={{
            left: `${planeX}%`,
            top: `${planeY}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-bold text-primary font-jost">
            {Math.round(progress)}%
          </span>
          <img
            src={prgplane}
            alt="Airplane"
            className="h-full w-full max-w-none object-contain"
            style={{ transform: `rotate(${planeRotation}deg)` }}
          />
        </div>
      </div>

      {title && (
        <p className="text-center text-base font-medium text-secondary font-jost">
          {title}
        </p>
      )}
    </div>
  );
};

export default RoundProgressbar;
