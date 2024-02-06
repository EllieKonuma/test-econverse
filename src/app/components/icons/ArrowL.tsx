import * as React from "react";
import { SVGProps } from "react";
const ArrowL = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={34}
    fill="none"
    {...props}
  >
    <path
      fill="#3F3F40"
      d="M20 3.04 16.967 0 0 17l16.967 17L20 30.96 6.067 17 20 3.04Z"
    />
  </svg>
);
export default ArrowL;
