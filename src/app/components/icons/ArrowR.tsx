import * as React from "react";
import { SVGProps } from "react";
const ArrowR = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={34}
    fill="none"
    {...props}
  >
    <path
      fill="#3F3F40"
      d="M0 30.96 3.033 34 20 17 3.033 0 0 3.04 13.933 17 0 30.96Z"
    />
  </svg>
);
export default ArrowR;
