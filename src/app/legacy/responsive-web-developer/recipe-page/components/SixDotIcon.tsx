import type { NextPage } from "next";
import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const SixDotIcon: NextPage<Props> = (props) => (
  <svg
    width="13"
    height="8"
    viewBox="0 0 13 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="1.5" cy="1.5" r="1.5" fill="#C4C4C4" />
    <circle cx="1.5" cy="6.5" r="1.5" fill="#C4C4C4" />
    <circle cx="6.5" cy="1.5" r="1.5" fill="#C4C4C4" />
    <circle cx="6.5" cy="6.5" r="1.5" fill="#C4C4C4" />
    <circle cx="11.5" cy="1.5" r="1.5" fill="#C4C4C4" />
    <circle cx="11.5" cy="6.5" r="1.5" fill="#C4C4C4" />
  </svg>
);

export default SixDotIcon;
