import type { SVGProps } from "react";

const Cpp = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256">
    <path fill="#00599C" d="M128 0L8 64v128l120 64 120-64V64z" />
    <path
      fill="#FFF"
      d="M96 160c-17.7 0-32-14.3-32-32s14.3-32 32-32c8.8 0 16.7 3.5 22.5 9.2l-9.2 9.2C106 110.6 101.3 108 96 108c-11 0-20 9-20 20s9 20 20 20c5.3 0 10-2.6 13.3-6.6l9.2 9.2C112.7 156.5 104.8 160 96 160z"
    />
  </svg>
);

export { Cpp };
