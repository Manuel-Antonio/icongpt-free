const FilterIconV1 = ({ width = "24", height = "24", strokeWidth="1" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      stroke="currentColor"
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M4 4h16v2H4z"></path>
      <path d="M10 10h4v8h-4z"></path>
      <path d="M6 16h12"></path>
      <path d="M8 20h8"></path>
    </svg>
  );
};

export { FilterIconV1 };
