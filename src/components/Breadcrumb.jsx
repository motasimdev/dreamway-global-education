import { useMemo } from "react";
import { Link, useLocation } from "react-router";
import Container from "./Container";

const formatSegment = (segment) => {
  return segment
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const Breadcrumb = () => {
  const location = useLocation();

  const items = useMemo(() => {
    const segments = location.pathname.split("/").filter(Boolean);
    const breadcrumbs = [{ path: "/", label: "Home" }];

    segments.forEach((segment, index) => {
      const path = "/" + segments.slice(0, index + 1).join("/");
      breadcrumbs.push({
        path,
        label: formatSegment(segment),
      });
    });

    return breadcrumbs;
  }, [location.pathname]);

  if (items.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className="bg-[#fffaf6] py-3 md:py-4">
      <Container>
        <div className="px-5 sm:px-8 lg:px-10">
          <ol className="flex flex-wrap items-center gap-2 font-jost text-sm">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;

              return (
                <li key={item.path} className="flex items-center gap-2">
                  {index > 0 && (
                    <span className="text-secondary/40" aria-hidden="true">
                      /
                    </span>
                  )}
                  {isLast ? (
                    <span
                      className="font-semibold text-primary"
                      aria-current="page"
                    >
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-secondary/70 transition-colors duration-300 hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </nav>
  );
};

export default Breadcrumb;
