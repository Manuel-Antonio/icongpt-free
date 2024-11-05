export const InfoIconV1 = ({ width = "24", height = "24", strokeWidth="1" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    stroke-width={strokeWidth}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <circle cx="12" cy="12" r="10" />
    <path
      d="M12 7a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm-1 4h2v7h-2v-7z"
      fill="#fff"
    />
  </svg>
);
