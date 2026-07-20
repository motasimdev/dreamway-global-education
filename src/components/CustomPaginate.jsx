/* eslint-disable react/prop-types */
import { useMemo } from "react";

const CustomPaginate = ({
  pageCount,
  pageRangeDisplayed = 3,
  marginPagesDisplayed = 1,
  currentPage,
  onPageChange,
  containerClassName,
  pageClassName,
  pageLinkClassName,
  previousClassName,
  previousLabel = "Previous",
  previousLinkClassName,
  nextClassName,
  nextLabel = "Next",
  nextLinkClassName,
  disabledClassName = "disabled",
  activeClassName = "active",
}) => {
  const handlePrevious = () => {
    if (currentPage > 0) {
      onPageChange({ selected: currentPage - 1 });
    }
  };

  const handleNext = () => {
    if (currentPage < pageCount - 1) {
      onPageChange({ selected: currentPage + 1 });
    }
  };

  const handlePageClick = (pageIndex) => {
    onPageChange({ selected: pageIndex });
  };

  const paginationItems = useMemo(() => {
    const items = [];
    const totalPages = pageCount;
    const current = currentPage;
    const range = pageRangeDisplayed;
    const margin = marginPagesDisplayed;

    if (totalPages <= range) {
      for (let i = 0; i < totalPages; i++) {
        items.push(i);
      }
      return items;
    }

    // Always show first page(s)
    for (let i = 0; i < margin; i++) {
      items.push(i);
    }

    // Ellipsis after first pages
    if (current - Math.floor(range / 2) > margin) {
      items.push("...");
    }

    // Main range of pages
    const start = Math.max(margin, current - Math.floor(range / 2));
    const end = Math.min(
      totalPages - margin - 1,
      current + Math.floor(range / 2),
    );

    for (let i = start; i <= end; i++) {
      if (items.indexOf(i) === -1) {
        items.push(i);
      }
    }
    
    // Ellipsis before last pages
    if (current + Math.floor(range / 2) < totalPages - margin -1) {
        items.push("...");
    }

    // Always show last page(s)
    for (let i = totalPages - margin; i < totalPages; i++) {
        if (items.indexOf(i) === -1) {
            items.push(i);
        }
    }

    return items;
  }, [pageCount, currentPage, pageRangeDisplayed, marginPagesDisplayed]);

  return (
    <ul className={containerClassName}>
      <li
        className={`${previousClassName} ${
          currentPage === 0 ? disabledClassName : ""
        }`}
      >
        <button
          onClick={handlePrevious}
          className={previousLinkClassName}
          disabled={currentPage === 0}
        >
          {previousLabel}
        </button>
      </li>

      {paginationItems.map((item, index) => {
        if (typeof item === "string") {
          return (
            <li key={`ellipsis-${index}`} className={pageClassName}>
              <span className={pageLinkClassName}>{item}</span>
            </li>
          );
        }

        const pageIndex = item;
        const isActive = pageIndex === currentPage;

        return (
          <li
            key={pageIndex}
            className={`${pageClassName} ${isActive ? activeClassName : ""}`}
          >
            <button
              onClick={() => handlePageClick(pageIndex)}
              className={pageLinkClassName}
            >
              {pageIndex + 1}
            </button>
          </li>
        );
      })}

      <li
        className={`${nextClassName} ${
          currentPage === pageCount - 1 ? disabledClassName : ""
        }`}
      >
        <button
          onClick={handleNext}
          className={nextLinkClassName}
          disabled={currentPage === pageCount - 1}
        >
          {nextLabel}
        </button>
      </li>
    </ul>
  );
};

export default CustomPaginate;
