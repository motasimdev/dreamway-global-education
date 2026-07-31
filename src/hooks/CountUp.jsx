import { useState, useEffect, useRef } from "react";

const parseValue = (val) => {
  const str = String(val ?? "");
  const hasPlus = str.endsWith("+");
  const numericStr = str.replace(/[,+]/g, "");
  const numeric = parseFloat(numericStr) || 0;
  return { numeric, hasPlus, original: str };
};

const formatWithCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const CountUp = ({ value, duration = 2000, className = "" }) => {
  const { numeric, hasPlus, original } = parseValue(value);
  const [count, setCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const ref = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frameId;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(easeOut * numeric);
            setCount(current);

            if (progress < 1) {
              frameId = requestAnimationFrame(animate);
            } else {
              setFinished(true);
            }
          };

          frameId = requestAnimationFrame(animate);
          observer.unobserve(node);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [numeric, duration]);

  const display = finished
    ? original
    : `${formatWithCommas(count)}${hasPlus ? "+" : ""}`;

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};

export default CountUp;