import type { NextPage } from "next";
import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const MarkunreadMailboxIcon: NextPage<Props> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 -960 960 960"
    width="48"
    {...props}
  >
    <path d="M240-417v-148H140v425h680v-425H360v-60h460q24 0 42 18t18 42v425q0 24-18 42t-42 18H140q-24 0-42-18t-18-42v-425q0-24 18-42t42-18h100v-255h300v160H300v303h-60ZM140-565v148-148 425-425Z" />
  </svg>
);

export default MarkunreadMailboxIcon;
