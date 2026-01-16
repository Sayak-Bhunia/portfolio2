import type { SVGProps } from "react";

const Spline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Spline"
    role="img"
  >
    <path
      d="M12 2C6.477 2 2 6.478 2 12s4.477 10 10 10 10-4.478 10-10S17.523 2 12 2zm4.94 7.06a1 1 0 010 1.414L12 13.414l-4.94-4.94a1 1 0 011.414-1.414L12 10.586l3.526-3.94a1 1 0 011.414 0z"
      fill="currentColor"
    />
  </svg>
);

export { Spline };
