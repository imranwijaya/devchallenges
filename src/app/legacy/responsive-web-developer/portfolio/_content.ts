import type { StaticImageData } from "next/image";
import recipePageDesktop from "@public/asset/legacy/responsive-web-developer/screenshot/recipe-page-desktop.png";
import myGalleryDesktop from "@public/asset/legacy/responsive-web-developer/screenshot/my-gallery-desktop.png";
import checkoutPageDesktop from "@public/asset/legacy/responsive-web-developer/screenshot/checkout-page-desktop.png";
import hobbyGaming from "@public/asset/legacy/responsive-web-developer/portfolio/hobby-gaming.jpg";
import hobbyReading from "@public/asset/legacy/responsive-web-developer/portfolio/hobby-reading.jpg";
import hobbyBadminton from "@public/asset/legacy/responsive-web-developer/portfolio/hobby-badminton.jpg";
import blogHowToOrganizeYourCss from "@public/asset/legacy/responsive-web-developer/portfolio/blog-how-to-organize-your-css.png";
import adidasLogo from "@public/asset/legacy/responsive-web-developer/portfolio/adidas-logo.webp";
import hmLogo from "@public/asset/legacy/responsive-web-developer/portfolio/h-m-logo.svg";
import niveaLogo from "@public/asset/legacy/responsive-web-developer/portfolio/nivea_logo.svg";
import { routesObject } from "@/app/legacy/_route";
const content = routesObject.responsiveWebDeveloper.child;

type Experience = {
  image: StaticImageData;
  imageAlt: string;
  date: string;
  title: string;
  description: string;
};

type Hobby = {
  image: StaticImageData;
  imageAlt: string;
  title: string;
  description: string;
};

type Skill = {
  name: string;
  value: string | number;
  maxValue: string;
};

export type ProjectTag =
  | "HTML"
  | "CSS"
  | "responsive"
  | "Next.js"
  | "Recipe"
  | "Masonry"
  | "Gallery"
  | "Checkout";

type Project = {
  title: string;
  description: string;
  tag: ProjectTag[];
  image: StaticImageData | string;
  imageAlt: string;
  hrefDemo: string;
  hrefCode: string;
};

type Blog = {
  category: string;
  title: string;
  description: string;
  href: string;
  hrefName: string;
  image: StaticImageData | string;
  imageAlt: string;
};

export const experiences: Experience[] = [
  {
    image: adidasLogo,
    imageAlt: "Adidas",
    date: "Feb 2017 - Current",
    title: "Front-end developer",
    description:
      "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
  },
  {
    image: hmLogo,
    imageAlt: "H&M",
    date: "Aug 2016 - Feb 2018",
    title: "Full-stack developer",
    description:
      "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
  },
  {
    image: niveaLogo,
    imageAlt: "Nivea",
    date: "Jun 2015 - Aug 2016",
    title: "Junior front-end developer",
    description:
      "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
  },
];

export const hobbies: Hobby[] = [
  {
    image: hobbyGaming,
    imageAlt: "DOTA 2",
    title: "Gaming",
    description: "Quisque feugiat malesuada molestie.",
  },
  {
    image: hobbyReading,
    imageAlt: "Reading",
    title: "Reading",
    description: "Quisque feugiat malesuada molestie.",
  },
  {
    image: hobbyBadminton,
    imageAlt: "Badminton",
    title: "Badminton",
    description: "Quisque feugiat malesuada molestie.",
  },
];

export const frontEndSkills: Skill[] = [
  {
    name: "HTML",
    value: "70",
    maxValue: "100",
  },
  {
    name: "CSS",
    value: "70",
    maxValue: "100",
  },
  {
    name: "Javascript",
    value: "85",
    maxValue: "100",
  },
  {
    name: "Next.js",
    value: "90",
    maxValue: "100",
  },
];

export const backEndSkills: Skill[] = [
  {
    name: "Node.js",
    value: "60",
    maxValue: "100",
  },
  {
    name: "Nest.js",
    value: "85",
    maxValue: "100",
  },
  {
    name: "Express.js",
    value: "90",
    maxValue: "100",
  },
  {
    name: "MySQL",
    value: "60",
    maxValue: "100",
  },
];

export const otherSkills: Skill[] = [
  {
    name: "Linux",
    value: "60",
    maxValue: "100",
  },
  {
    name: "C Language",
    value: "85",
    maxValue: "100",
  },
];

export const designSkills: Skill[] = [
  {
    name: "Figma",
    value: "65",
    maxValue: "100",
  },
  {
    name: "Photoshop",
    value: "80",
    maxValue: "100",
  },
];

export const projectTags: ProjectTag[] = [
  "HTML",
  "CSS",
  "responsive",
  "Next.js",
  "Recipe",
  "Masonry",
  "Gallery",
  "Checkout",
];

export const projects: Project[] = [
  {
    title: "Recipe Blog",
    description:
      "In this project, I work with NEXT.JS, HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    tag: ["Next.js", "HTML", "CSS", "responsive", "Recipe"],
    image: recipePageDesktop,
    imageAlt: "Recipe Blog",
    hrefDemo: content.recipePage.readmeContent.demoLink,
    hrefCode: content.recipePage.readmeContent.solutionLink,
  },
  {
    title: "My Gallery",
    description:
      "In this project, I work with NEXT.JS, HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    tag: ["Next.js", "HTML", "CSS", "responsive", "Masonry", "Gallery"],
    image: myGalleryDesktop,
    imageAlt: "My Gallery",
    hrefDemo: content.myGallery.readmeContent.demoLink,
    hrefCode: content.myGallery.readmeContent.solutionLink,
  },
  {
    title: "Checkout",
    description:
      "In this project, I work with NEXT.JS, HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    tag: ["Next.js", "HTML", "CSS", "responsive", "Checkout"],
    image: checkoutPageDesktop,
    imageAlt: "image",
    hrefDemo: content.checkoutPage.readmeContent.demoLink,
    hrefCode: content.checkoutPage.readmeContent.solutionLink,
  },
];

export const blogs: Blog[] = [
  {
    category: "Blog",
    title: "How to organize your CSS",
    description: `In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.  

Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.`,
    href: "https://dev.to/couellet/how-to-organize-your-css-with-a-modular-architecture-oocss-bem-smacss-3gk0",
    hrefName: "dev.to",
    image: blogHowToOrganizeYourCss,
    imageAlt: "How to organize your CSS",
  },
];
