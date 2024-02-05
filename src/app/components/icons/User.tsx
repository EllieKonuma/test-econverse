import * as React from "react";
import { SVGProps } from "react";
const User = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <g stroke="#9F9F9F" strokeWidth={2} clipPath="url(#a)">
      <path
        strokeMiterlimit={10}
        d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
      />
      <path strokeMiterlimit={10} d="M16 20a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.975 24.922a9.004 9.004 0 0 1 16.05 0"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default User;
