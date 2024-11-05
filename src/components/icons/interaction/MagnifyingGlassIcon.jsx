const MagnifyingGlassIconV1 = ({ width = "24", height = "24", strokeWidth="1" }) => (
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
    <circle cx="10" cy="10" r="6" />
    <line x1="16" y1="16" x2="20" y2="20" />
  </svg>
);
const MagnifyingGlassIconV2 = ({ width = 24, height = 24, strokeWidth="1" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    stroke="currentColor"
    stroke-width="1"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle cx="10" cy="10" r="6" />
    <line x1="14.5" y1="14.5" x2="19" y2="19" />
  </svg>
);
export { MagnifyingGlassIconV1, MagnifyingGlassIconV2 };
