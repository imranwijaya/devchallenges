import { routesObject } from "@/app/_route";

const content = routesObject.frontEndDeveloper.child;

export type Menu = {
  name: string;
  href: string;
  exact: boolean;
  child: Menu[];
};

export const menus: Menu[] = [
  {
    name: "Colors",
    href: `${content?.buttonComponent?.href}/#`,
    exact: true,
    child: [],
  },
  {
    name: "Typography",
    href: `${content?.buttonComponent?.href}/#`,
    exact: true,
    child: [],
  },
  {
    name: "Spaces",
    href: `${content?.buttonComponent?.href}/#`,
    exact: true,
    child: [],
  },
  {
    name: "Buttons",
    href: `${content?.buttonComponent?.href}`,
    exact: true,
    child: [],
  },
  {
    name: "Inputs",
    href: `${content.inputComponent?.href}`,
    exact: true,
    child: [],
  },
  {
    name: "Grid",
    href: `${content?.buttonComponent?.href}/#`,
    exact: true,
    child: [],
  },
];
