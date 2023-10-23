import type { NextPage } from "next";
import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const LocationCityIcon: NextPage<Props> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 -960 960 960"
    width="48"
    {...props}
  >
    <path d="M120-120v-558h247v-92l113-110 113 110v258h247v392H120Zm60-60h106v-106H180v106Zm0-166h106v-106H180v106Zm0-166h106v-106H180v106Zm247 332h106v-106H427v106Zm0-166h106v-106H427v106Zm0-166h106v-106H427v106Zm0-166h106v-106H427v106Zm247 498h106v-106H674v106Zm0-166h106v-106H674v106Z" />
  </svg>
);

export default LocationCityIcon;