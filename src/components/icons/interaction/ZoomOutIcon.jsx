const ZoomOutIconV1 = ({ width = 24, height = 24, strokeWidth="1" }) => (
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
    <line x1="8" y1="10" x2="12" y2="10" />
    <line x1="16" y1="16" x2="20" y2="20" />
  </svg>
);
const ZoomOutIconV2 = ({ width = 24, height = 24, strokeWidth="1" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    stroke-width={strokeWidth}
    stroke-linecap="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="6" />
    <line x1="7" y1="10" x2="13" y2="10" />
    <line x1="14.5" y1="14.5" x2="19" y2="19" />
  </svg>
);
export { ZoomOutIconV1, ZoomOutIconV2 };
