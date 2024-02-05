import * as React from "react";
import { SVGProps } from "react";
const Crown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        stroke="#f71963"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.526 15.314a.626.626 0 0 0 .779.458 21.398 21.398 0 0 1 11.386-.001.626.626 0 0 0 .78-.458l1.99-8.462a.624.624 0 0 0-.862-.715l-3.951 1.757a.625.625 0 0 1-.8-.268l-2.302-4.142a.625.625 0 0 0-1.092 0L7.153 7.625a.625.625 0 0 1-.8.268L2.4 6.136a.625.625 0 0 0-.862.714l1.988 8.464Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Crown;
