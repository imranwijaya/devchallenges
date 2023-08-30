import type { StaticImageData } from "next/image";
// RESPONSIVE WEB DEVELOPER
import notFoundDesktop from "@public/asset/responsive-web-developer/screenshot/404-not-found-desktop.png";
import myTeamPageDesktop from "@public/asset/responsive-web-developer/screenshot/my-team-page-desktop.png";
import interiorConsultantDesktop from "@public/asset/responsive-web-developer/screenshot/interior-consultant-desktop.png";
import recipePageDesktop from "@public/asset/responsive-web-developer/screenshot/recipe-page-desktop.png";
import myGalleryDesktop from "@public/asset/responsive-web-developer/screenshot/my-gallery-desktop.png";
import checkoutPageDesktop from "@public/asset/responsive-web-developer/screenshot/checkout-page-desktop.png";
import edieHomepageDesktop from "@public/asset/responsive-web-developer/screenshot/edie-homepage-desktop.png";
import portfolioDesktop from "@public/asset/responsive-web-developer/screenshot/portfolio-desktop.png";
// FRONT-END DEVELOPER
import buttonComponentDesktop from "@public/asset/front-end-developer/screenshot/button-component-desktop.png";

type ResponsiveWebDeveloper =
  | "notFound"
  | "myTeamPage"
  | "interiorConsultant"
  | "recipePage"
  | "myGallery"
  | "checkoutPage"
  | "edieHomepage"
  | "portfolio";

type FrontEndDeveloper =
  | "buttonComponent"
  | "inputComponent"
  | "windbnb"
  | "todoApp"
  | "randomQuoteGenerator"
  | "countryQuiz"
  | "weatherApp"
  | "githubJobs";

type FullStackDeveloper =
  | "imageUploader"
  | "myUnsplash"
  | "catWiki"
  | "authenticationApp"
  | "shoppingify"
  | "chatGroup"
  | "tweeterTwitterClone"
  | "thulloTrelloClone";

type Page = {
  name: string;
  href: string;
  exact: boolean;
  section: string;
  image?: string | StaticImageData;
  readmeHref: string;
  readmeName?: string;
  readmeContent: {
    demoLink: string;
    solutionLink: string;
    screenshotLink: string;
    screenshotGithubLink: string;
  };
};

type SectionPage = Omit<Page, "readmeHref" | "readmeContent">;

type RouteObject = {
  responsiveWebDeveloper: SectionPage & {
    child: { [key in ResponsiveWebDeveloper]: Page };
  };
  frontEndDeveloper: SectionPage & {
    child: { [key in FrontEndDeveloper]?: Page };
  };
  fullStackDeveloper: SectionPage & {
    child: { [key in FullStackDeveloper]?: Page };
  };
};

type RouteArray = {
  responsiveWebDeveloper: SectionPage & { child: Page[] };
  frontEndDeveloper: SectionPage & { child: Page[] };
  fullStackDeveloper: SectionPage & { child: Page[] };
};

export const routesObject: RouteObject = {
  responsiveWebDeveloper: {
    name: "Responsive Web Developer",
    href: "/responsive-web-developer",
    exact: false,
    section: "Responsive Web Developer",
    child: {
      notFound: {
        name: "404 Not Found",
        href: "/responsive-web-developer/404-not-found",
        exact: true,
        section: "Responsive Web Developer",
        image: notFoundDesktop,
        readmeHref: "/responsive-web-developer/404-not-found/readme",
        readmeContent: {
          demoLink:
            "https://devchallenges-solutions.vercel.app/responsive-web-developer/404-not-found",
          solutionLink:
            "https://github.com/imranwijaya/devchallenges/tree/main/src/app/responsive-web-developer/404-not-found",
          screenshotLink:
            "/asset/responsive-web-developer/screenshot/404-not-found-desktop.png",
          screenshotGithubLink:
            "https://raw.githubusercontent.com/imranwijaya/devchallenges/main/public/asset/responsive-web-developer/screenshot/404-not-found-desktop.png",
        },
      },
      myTeamPage: {
        name: "My team page",
        href: "/responsive-web-developer/my-team-page",
        exact: true,
        section: "Responsive Web Developer",
        image: myTeamPageDesktop,
        readmeHref: "/responsive-web-developer/my-team-page/readme",
        readmeContent: {
          demoLink:
            "https://devchallenges-solutions.vercel.app/responsive-web-developer/my-team-page",
          solutionLink:
            "https://github.com/imranwijaya/devchallenges/tree/main/src/app/responsive-web-developer/my-team-page",
          screenshotLink:
            "/asset/responsive-web-developer/screenshot/my-team-page-desktop.png",
          screenshotGithubLink:
            "https://raw.githubusercontent.com/imranwijaya/devchallenges/main/public/asset/responsive-web-developer/screenshot/my-team-page-desktop.png",
        },
      },
      interiorConsultant: {
        name: "Interior Consultant",
        href: "/responsive-web-developer/interior-consultant",
        exact: true,
        section: "Responsive Web Developer",
        image: interiorConsultantDesktop,
        readmeHref: "/responsive-web-developer/interior-consultant/readme",
        readmeContent: {
          demoLink:
            "https://devchallenges-solutions.vercel.app/responsive-web-developer/interior-consultant",
          solutionLink:
            "https://github.com/imranwijaya/devchallenges/tree/main/src/app/responsive-web-developer/interior-consultant",
          screenshotLink:
            "/asset/responsive-web-developer/screenshot/interior-consultant-desktop.png",
          screenshotGithubLink:
            "https://raw.githubusercontent.com/imranwijaya/devchallenges/main/public/asset/responsive-web-developer/screenshot/interior-consultant-desktop.png",
        },
      },
      recipePage: {
        name: "Recipe page",
        href: "/responsive-web-developer/recipe-page",
        exact: true,
        section: "Responsive Web Developer",
        image: recipePageDesktop,
        readmeHref: "/responsive-web-developer/recipe-page/readme",
        readmeContent: {
          demoLink:
            "https://devchallenges-solutions.vercel.app/responsive-web-developer/recipe-page",
          solutionLink:
            "https://github.com/imranwijaya/devchallenges/tree/main/src/app/responsive-web-developer/recipe-page",
          screenshotLink:
            "/asset/responsive-web-developer/screenshot/recipe-page-desktop.png",
          screenshotGithubLink:
            "https://raw.githubusercontent.com/imranwijaya/devchallenges/main/public/asset/responsive-web-developer/screenshot/recipe-page-desktop.png",
        },
      },
      myGallery: {
        name: "My Gallery",
        href: "/responsive-web-developer/my-gallery",
        exact: true,
        section: "Responsive Web Developer",
        image: myGalleryDesktop,
        readmeHref: "/responsive-web-developer/my-gallery/readme",
        readmeContent: {
          demoLink:
            "https://devchallenges-solutions.vercel.app/responsive-web-developer/my-gallery",
          solutionLink:
            "https://github.com/imranwijaya/devchallenges/tree/main/src/app/responsive-web-developer/my-gallery",
          screenshotLink:
            "/asset/responsive-web-developer/screenshot/my-gallery-desktop.png",
          screenshotGithubLink:
            "https://raw.githubusercontent.com/imranwijaya/devchallenges/main/public/asset/responsive-web-developer/screenshot/my-gallery-desktop.png",
        },
      },
      checkoutPage: {
        name: "Checkout Page",
        href: "/responsive-web-developer/checkout-page",
        exact: true,
        section: "Responsive Web Developer",
        image: checkoutPageDesktop,
        readmeHref: "/responsive-web-developer/checkout-page/readme",
        readmeContent: {
          demoLink:
            "https://devchallenges-solutions.vercel.app/responsive-web-developer/checkout-page",
          solutionLink:
            "https://github.com/imranwijaya/devchallenges/tree/main/src/app/responsive-web-developer/checkout-page",
          screenshotLink:
            "/asset/responsive-web-developer/screenshot/checkout-page-desktop.png",
          screenshotGithubLink:
            "https://raw.githubusercontent.com/imranwijaya/devchallenges/main/public/asset/responsive-web-developer/screenshot/checkout-page-desktop.png",
        },
      },
      edieHomepage: {
        name: "Edie homepage",
        href: "/responsive-web-developer/edie-homepage",
        exact: true,
        section: "Responsive Web Developer",
        image: edieHomepageDesktop,
        readmeHref: "/responsive-web-developer/edie-homepage/readme",
        readmeContent: {
          demoLink:
            "https://devchallenges-solutions.vercel.app/responsive-web-developer/edie-homepage",
          solutionLink:
            "https://github.com/imranwijaya/devchallenges/tree/main/src/app/responsive-web-developer/edie-homepage",
          screenshotLink:
            "/asset/responsive-web-developer/screenshot/edie-homepage-desktop.png",
          screenshotGithubLink:
            "https://raw.githubusercontent.com/imranwijaya/devchallenges/main/public/asset/responsive-web-developer/screenshot/edie-homepage-desktop.png",
        },
      },
      portfolio: {
        name: "Portfolio",
        href: "/responsive-web-developer/portfolio",
        exact: true,
        section: "Responsive Web Developer",
        image: portfolioDesktop,
        readmeHref: "/responsive-web-developer/portfolio/readme",
        readmeContent: {
          demoLink:
            "https://devchallenges-solutions.vercel.app/responsive-web-developer/portfolio",
          solutionLink:
            "https://github.com/imranwijaya/devchallenges/tree/main/src/app/responsive-web-developer/portfolio",
          screenshotLink:
            "/asset/responsive-web-developer/screenshot/portfolio-desktop.png",
          screenshotGithubLink:
            "https://raw.githubusercontent.com/imranwijaya/devchallenges/main/public/asset/responsive-web-developer/screenshot/portfolio-desktop.png",
        },
      },
    },
  },
  frontEndDeveloper: {
    name: "Front-end Developer",
    href: "/front-end-developer",
    exact: false,
    section: "Front-end Developer",
    child: {
      buttonComponent: {
        name: "Button component",
        href: "/front-end-developer/button-component",
        exact: true,
        section: "Front-end Developer",
        image: buttonComponentDesktop,
        readmeHref: "/front-end-developer/button-component/readme",
        readmeContent: {
          demoLink:
            "https://devchallenges-solutions.vercel.app/front-end-developer/button-component",
          solutionLink:
            "https://github.com/imranwijaya/devchallenges/tree/main/src/app/front-end-developer/404-not-found",
          screenshotLink:
            "/asset/front-end-developer/screenshot/button-component-desktop.png",
          screenshotGithubLink:
            "https://raw.githubusercontent.com/imranwijaya/devchallenges/main/public/asset/front-end-developer/screenshot/button-component-desktop.png",
        },
      },
    },
  },
  fullStackDeveloper: {
    name: "Full-stack Developer",
    href: "/full-stack-developer",
    exact: false,
    section: "Full-stack developer",
    child: {},
  },
};

export const routesArray: RouteArray = {
  responsiveWebDeveloper: {
    name: "Responsive Web Developer",
    href: "/responsive-web-developer",
    exact: false,
    section: "Responsive Web Developer",
    child: [
      {
        name: "404 Not Found",
        href: "/responsive-web-developer/404-not-found",
        exact: true,
        section: "Responsive Web Developer",
        image: notFoundDesktop,
        readmeHref: "/responsive-web-developer/404-not-found/readme",
        readmeContent: {
          demoLink:
            "https://devchallenges-solutions.vercel.app/responsive-web-developer/404-not-found",
          solutionLink:
            "https://github.com/imranwijaya/devchallenges/tree/main/src/app/responsive-web-developer/404-not-found",
          screenshotLink:
            "/asset/responsive-web-developer/screenshot/404-not-found-desktop.png",
          screenshotGithubLink:
            "https://raw.githubusercontent.com/imranwijaya/devchallenges/main/public/asset/responsive-web-developer/screenshot/404-not-found-desktop.png",
        },
      },
      {
        name: "My team page",
        href: "/responsive-web-developer/my-team-page",
        exact: true,
        section: "Responsive Web Developer",
        image: myTeamPageDesktop,
        readmeHref: "/responsive-web-developer/my-team-page/readme",
        readmeContent: {
          demoLink:
            "https://devchallenges-solutions.vercel.app/responsive-web-developer/my-team-page",
          solutionLink:
            "https://github.com/imranwijaya/devchallenges/tree/main/src/app/responsive-web-developer/my-team-page",
          screenshotLink:
            "/asset/responsive-web-developer/screenshot/my-team-page-desktop.png",
          screenshotGithubLink:
            "https://raw.githubusercontent.com/imranwijaya/devchallenges/main/public/asset/responsive-web-developer/screenshot/my-team-page-desktop.png",
        },
      },
      {
        name: "Interior Consultant",
        href: "/responsive-web-developer/interior-consultant",
        exact: true,
        section: "Responsive Web Developer",
        image: interiorConsultantDesktop,
        readmeHref: "/responsive-web-developer/interior-consultant/readme",
        readmeContent: {
          demoLink:
            "https://devchallenges-solutions.vercel.app/responsive-web-developer/interior-consultant",
          solutionLink:
            "https://github.com/imranwijaya/devchallenges/tree/main/src/app/responsive-web-developer/interior-consultant",
          screenshotLink:
            "/asset/responsive-web-developer/screenshot/interior-consultant-desktop.png",
          screenshotGithubLink:
            "https://raw.githubusercontent.com/imranwijaya/devchallenges/main/public/asset/responsive-web-developer/screenshot/interior-consultant-desktop.png",
        },
      },
      {
        name: "Recipe page",
        href: "/responsive-web-developer/recipe-page",
        exact: true,
        section: "Responsive Web Developer",
        image: recipePageDesktop,
        readmeHref: "/responsive-web-developer/recipe-page/readme",
        readmeContent: {
          demoLink:
            "https://devchallenges-solutions.vercel.app/responsive-web-developer/recipe-page",
          solutionLink:
            "https://github.com/imranwijaya/devchallenges/tree/main/src/app/responsive-web-developer/recipe-page",
          screenshotLink:
            "/asset/responsive-web-developer/screenshot/recipe-page-desktop.png",
          screenshotGithubLink:
            "https://raw.githubusercontent.com/imranwijaya/devchallenges/main/public/asset/responsive-web-developer/screenshot/recipe-page-desktop.png",
        },
      },
      {
        name: "My Gallery",
        href: "/responsive-web-developer/my-gallery",
        exact: true,
        section: "Responsive Web Developer",
        image: myGalleryDesktop,
        readmeHref: "/responsive-web-developer/my-gallery/readme",
        readmeContent: {
          demoLink:
            "https://devchallenges-solutions.vercel.app/responsive-web-developer/my-gallery",
          solutionLink:
            "https://github.com/imranwijaya/devchallenges/tree/main/src/app/responsive-web-developer/my-gallery",
          screenshotLink:
            "/asset/responsive-web-developer/screenshot/my-gallery-desktop.png",
          screenshotGithubLink:
            "https://raw.githubusercontent.com/imranwijaya/devchallenges/main/public/asset/responsive-web-developer/screenshot/my-gallery-desktop.png",
        },
      },
      {
        name: "Checkout Page",
        href: "/responsive-web-developer/checkout-page",
        exact: true,
        section: "Responsive Web Developer",
        image: checkoutPageDesktop,
        readmeHref: "/responsive-web-developer/checkout-page/readme",
        readmeContent: {
          demoLink:
            "https://devchallenges-solutions.vercel.app/responsive-web-developer/checkout-page",
          solutionLink:
            "https://github.com/imranwijaya/devchallenges/tree/main/src/app/responsive-web-developer/checkout-page",
          screenshotLink:
            "/asset/responsive-web-developer/screenshot/checkout-page-desktop.png",
          screenshotGithubLink:
            "https://raw.githubusercontent.com/imranwijaya/devchallenges/main/public/asset/responsive-web-developer/screenshot/checkout-page-desktop.png",
        },
      },
      {
        name: "Edie homepage",
        href: "/responsive-web-developer/edie-homepage",
        exact: true,
        section: "Responsive Web Developer",
        image: edieHomepageDesktop,
        readmeHref: "/responsive-web-developer/edie-homepage/readme",
        readmeContent: {
          demoLink:
            "https://devchallenges-solutions.vercel.app/responsive-web-developer/edie-homepage",
          solutionLink:
            "https://github.com/imranwijaya/devchallenges/tree/main/src/app/responsive-web-developer/edie-homepage",
          screenshotLink:
            "/asset/responsive-web-developer/screenshot/edie-homepage-desktop.png",
          screenshotGithubLink:
            "https://raw.githubusercontent.com/imranwijaya/devchallenges/main/public/asset/responsive-web-developer/screenshot/edie-homepage-desktop.png",
        },
      },
      {
        name: "Portfolio",
        href: "/responsive-web-developer/portfolio",
        exact: true,
        section: "Responsive Web Developer",
        image: portfolioDesktop,
        readmeHref: "/responsive-web-developer/portfolio/readme",
        readmeContent: {
          demoLink:
            "https://devchallenges-solutions.vercel.app/responsive-web-developer/portfolio",
          solutionLink:
            "https://github.com/imranwijaya/devchallenges/tree/main/src/app/responsive-web-developer/portfolio",
          screenshotLink:
            "/asset/responsive-web-developer/screenshot/portfolio-desktop.png",
          screenshotGithubLink:
            "https://raw.githubusercontent.com/imranwijaya/devchallenges/main/public/asset/responsive-web-developer/screenshot/portfolio-desktop.png",
        },
      },
    ],
  },
  frontEndDeveloper: {
    name: "Front-end Developer",
    href: "/front-end-developer",
    exact: false,
    section: "Front-end Developer",
    child: [
      {
        name: "Button component",
        href: "/front-end-developer/button-component",
        exact: true,
        section: "Front-end Developer",
        image: buttonComponentDesktop,
        readmeHref: "/front-end-developer/button-component/readme",
        readmeContent: {
          demoLink:
            "https://devchallenges-solutions.vercel.app/front-end-developer/button-component",
          solutionLink:
            "https://github.com/imranwijaya/devchallenges/tree/main/src/app/front-end-developer/404-not-found",
          screenshotLink:
            "/asset/front-end-developer/screenshot/button-component-desktop.png",
          screenshotGithubLink:
            "https://raw.githubusercontent.com/imranwijaya/devchallenges/main/public/asset/front-end-developer/screenshot/button-component-desktop.png",
        },
      },
    ],
  },
  fullStackDeveloper: {
    name: "Full-stack Developer",
    href: "/full-stack-developer",
    exact: false,
    section: "Full-stack developer",
    child: [],
  },
};
