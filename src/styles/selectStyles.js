// Shared React Select styles used across the project.

export const customSelectStyles  = {
    control: (provided) => ({
      ...provided,
      borderRadius: "9999px",
      borderColor: "#e5e7eb",
      padding: "2px 8px",
      minHeight: "42px",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#fc7c16",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#ffffff" : "#36454f",
      backgroundColor: state.isSelected ? "#fc7c16" : "#ffffff",
      "&:hover": {
        backgroundColor: "#ffefe2a8",
        color: "#fc7c16",
      },
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "1rem",
      overflow: "hidden",
      boxShadow: "0 10px 15px -3px rgba(54, 69, 79, 0.1)",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#9ca3af",
      fontSize: "0.875rem",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#36454f",
      fontSize: "0.875rem",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
  };