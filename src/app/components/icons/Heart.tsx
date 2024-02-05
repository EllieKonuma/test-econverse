import * as React from "react";
import { SVGProps } from "react";
const Heart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        stroke="#9F9F9F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 27S3.5 20 3.5 11.5A6.501 6.501 0 0 1 16 8.996h0A6.501 6.501 0 0 1 28.5 11.5C28.5 20 16 27 16 27Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Heart;
