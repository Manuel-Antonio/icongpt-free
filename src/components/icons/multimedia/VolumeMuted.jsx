export const VolumeMutedV1 = ({ width = 24, height = 24 , strokeWidth="1"}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width={strokeWidth}
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M9 18V6l-4 3h-2v6h2l4 3z" />
    <path d="M15 9v6" />
    <path d="M12 12h6" />
    <path d="M1 1l22 22" />
  </svg>
);

export const VolumeMutedV2 = ({ width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width={strokeWidth}
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M9 18V6l-4 3H1v6h4l4 3z" />
    <path d="M12 10l4 4" />
    <path d="M12 14l4-4" />
  </svg>
);