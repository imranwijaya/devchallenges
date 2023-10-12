import type { StaticImageData } from "next/image";
// RESPONSIVE WEB DEVELOPER
import minimalBlogCardDesktop from "@public/asset/responsive-web-developer/screenshot/minimal-blog-card-desktop.png";
import businessBlogCardDesktop from "@public/asset/responsive-web-developer/screenshot/business-blog-card-desktop.png";
// JAVASCRIPT DEVELOPER
// FRONTEND DEVELOPER
// FULLSTACK DEVELOPER

type ResponsiveWebDeveloper =
  | "minimalBlogCard"
  | "businessBlogCard"
  | "testimonialPage"
  | "contactPage"
  | "simpleHomepageAlarado";

type JavascriptDeveloper =
  | "multiStepRegisterForm"
  | "musicPlayer"
  | "guessTheWordGame"
  | "randomQuote"
  | "qaCodeGenerator";

// type FrontendDeveloper = "";

// type FullstackDeveloper = "";

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
    challengeLink: string;
  };
};

type SectionPage = Omit<Page, "readmeHref" | "readmeContent">;

type RouteObject = {
  responsiveWebDeveloper: SectionPage & {
    child: { [key in ResponsiveWebDeveloper]: Page };
  };
  javascriptDeveloper: SectionPage & {
    child: { [key in JavascriptDeveloper]?: Page };
  };
  // frontendDeveloper: SectionPage & {
  //   child: { [key in FrontendDeveloper]?: Page };
  // };
  // fullstackDeveloper: SectionPage & {
  //   child: { [key in FullstackDeveloper]?: Page };
  // };
};

type RouteArray = {
  responsiveWebDeveloper: SectionPage & { child: Page[] };
  javascriptDeveloper: SectionPage & { child: Page[] };
  // frontendDeveloper: SectionPage & { child: Page[] };
  // fullstackDeveloper: SectionPage & { child: Page[] };
};

export const routesObject: RouteObject = {
  responsiveWebDeveloper: {
    name: "Responsive Web Developer",
    href: "/responsive-web-developer",
    exact: false,
    section: "Responsive Web Developer",
    child: {
      minimalBlogCard: {
        name: "Minimal Blog Card",
        href: "/responsive-web-developer/minimal-blog-card",
        exact: true,
        section: "Responsive Web Developer",
        image: minimalBlogCardDesktop,
        readmeHref: "/responsive-web-developer/minimal-blog-card/readme",
        readmeContent: {
          demoLink:
            "https://devchallenges-solutions.vercel.app/responsive-web-developer/minimal-blog-card",
          solutionLink:
            "https://github.com/imranwijaya/devchallenges/tree/main/src/app/responsive-web-developer/minimal-blog-card",
          screenshotLink:
            "/asset/responsive-web-developer/screenshot/minimal-blog-card-desktop.png",
          screenshotGithubLink:
            "https://raw.githubusercontent.com/imranwijaya/devchallenges/main/public/asset/responsive-web-developer/screenshot/minimal-blog-card-desktop.png",
          challengeLink: "https://devchallenges.io/challenge/27",
        },
      },
      businessBlogCard: {
        name: "Business Blog Card",
        href: "/responsive-web-developer/business-blog-card",
        exact: true,
        section: "Responsive Web Developer",
        image: businessBlogCardDesktop,
        readmeHref: "/responsive-web-developer/business-blog-card/readme",
        readmeContent: {
          demoLink:
            "https://devchallenges-solutions.vercel.app/responsive-web-developer/business-blog-card",
          solutionLink:
            "https://github.com/imranwijaya/devchallenges/tree/main/src/app/responsive-web-developer/business-blog-card",
          screenshotLink:
            "/asset/responsive-web-developer/screenshot/business-blog-card-desktop.png",
          screenshotGithubLink:
            "https://raw.githubusercontent.com/imranwijaya/devchallenges/main/public/asset/responsive-web-developer/screenshot/business-blog-card-desktop.png",
          challengeLink: "https://devchallenges.io/challenge/28",
        },
      },
      testimonialPage: {
        name: "Testimonial Page",
        href: "/responsive-web-developer/testimonial-page",
        exact: true,
        section: "Responsive Web Developer",
        // image: "",
        readmeHref: "/responsive-web-developer/testimonial-page/readme",
        readmeContent: {
          demoLink:
            "https://devchallenges-solutions.vercel.app/responsive-web-developer/testimonial-page",
          solutionLink:
            "https://github.com/imranwijaya/devchallenges/tree/main/src/app/responsive-web-developer/testimonial-page",
          screenshotLink:
            "/asset/responsive-web-developer/screenshot/testimonial-page-desktop.png",
          screenshotGithubLink:
            "https://raw.githubusercontent.com/imranwijaya/devchallenges/main/public/asset/responsive-web-developer/screenshot/testimonial-page-desktop.png",
          challengeLink: "https://devchallenges.io/challenge/29",
        },
      },
      contactPage: {
        name: "Contact Page",
        href: "/responsive-web-developer/contact-page",
        exact: true,
        section: "Responsive Web Developer",
        // image: "",
        readmeHref: "/responsive-web-developer/contact-page/readme",
        readmeContent: {
          demoLink:
            "https://devchallenges-solutions.vercel.app/responsive-web-developer/contact-page",
          solutionLink:
            "https://github.com/imranwijaya/devchallenges/tree/main/src/app/responsive-web-developer/contact-page",
          screenshotLink:
            "/asset/responsive-web-developer/screenshot/contact-page-desktop.png",
          screenshotGithubLink:
            "https://raw.githubusercontent.com/imranwijaya/devchallenges/main/public/asset/responsive-web-developer/screenshot/contact-page-desktop.png",
          challengeLink: "https://devchallenges.io/challenge/31",
        },
      },
      simpleHomepageAlarado: {
        name: "Simple Homepage - Alarado",
        href: "/responsive-web-developer/simple-homepage-alarado",
        exact: true,
        section: "Responsive Web Developer",
        // image: "",
        readmeHref: "/responsive-web-developer/simple-homepage-alarado/readme",
        readmeContent: {
          demoLink:
            "https://devchallenges-solutions.vercel.app/responsive-web-developer/simple-homepage-alarado",
          solutionLink:
            "https://github.com/imranwijaya/devchallenges/tree/main/src/app/responsive-web-developer/simple-homepage-alarado",
          screenshotLink:
            "/asset/responsive-web-developer/screenshot/simple-homepage-alarado-desktop.png",
          screenshotGithubLink:
            "https://raw.githubusercontent.com/imranwijaya/devchallenges/main/public/asset/responsive-web-developer/screenshot/simple-homepage-alarado-desktop.png",
          challengeLink: "https://devchallenges.io/challenge/33",
        },
      },
    },
  },
  javascriptDeveloper: {
    name: "JavaScript Developer",
    href: "/javascript-developer",
    exact: false,
    section: "JavaScript Developer",
    child: {},
  },
  // frontendDeveloper: {
  //   name: "Frontend Developer",
  //   href: "/frontend-developer",
  //   exact: false,
  //   section: "Frontend Developer",
  //   child: {},
  // },
  // fullstackDeveloper: {
  //   name: "Fullstack Developer",
  //   href: "/fullstack-developer",
  //   exact: false,
  //   section: "Fullstack developer",
  //   child: {},
  // },
};

export const routesArray: RouteArray = {
  responsiveWebDeveloper: {
    name: "Responsive Web Developer",
    href: "/responsive-web-developer",
    exact: false,
    section: "Responsive Web Developer",
    child: [
      {
        name: "Minimal Blog Card",
        href: "/responsive-web-developer/minimal-blog-card",
        exact: true,
        section: "Responsive Web Developer",
        image: minimalBlogCardDesktop,
        readmeHref: "/responsive-web-developer/minimal-blog-card/readme",
        readmeContent: {
          demoLink:
            "https://devchallenges-solutions.vercel.app/responsive-web-developer/minimal-blog-card",
          solutionLink:
            "https://github.com/imranwijaya/devchallenges/tree/main/src/app/responsive-web-developer/minimal-blog-card",
          screenshotLink:
            "/asset/responsive-web-developer/screenshot/minimal-blog-card-desktop.png",
          screenshotGithubLink:
            "https://raw.githubusercontent.com/imranwijaya/devchallenges/main/public/asset/responsive-web-developer/screenshot/minimal-blog-card-desktop.png",
          challengeLink: "https://devchallenges.io/challenge/27",
        },
      },
      {
        name: "Business Blog Card",
        href: "/responsive-web-developer/business-blog-card",
        exact: true,
        section: "Responsive Web Developer",
        image: businessBlogCardDesktop,
        readmeHref: "/responsive-web-developer/business-blog-card/readme",
        readmeContent: {
          demoLink:
            "https://devchallenges-solutions.vercel.app/responsive-web-developer/business-blog-card",
          solutionLink:
            "https://github.com/imranwijaya/devchallenges/tree/main/src/app/responsive-web-developer/business-blog-card",
          screenshotLink:
            "/asset/responsive-web-developer/screenshot/business-blog-card-desktop.png",
          screenshotGithubLink:
            "https://raw.githubusercontent.com/imranwijaya/devchallenges/main/public/asset/responsive-web-developer/screenshot/business-blog-card-desktop.png",
          challengeLink: "https://devchallenges.io/challenge/28",
        },
      },
      // {
      //   name: "Testimonial Page",
      //   href: "/responsive-web-developer/testimonial-page",
      //   exact: true,
      //   section: "Responsive Web Developer",
      //   // image: "",
      //   readmeHref: "/responsive-web-developer/testimonial-page/readme",
      //   readmeContent: {
      //     demoLink:
      //       "https://devchallenges-solutions.vercel.app/responsive-web-developer/testimonial-page",
      //     solutionLink:
      //       "https://github.com/imranwijaya/devchallenges/tree/main/src/app/responsive-web-developer/testimonial-page",
      //     screenshotLink:
      //       "/asset/responsive-web-developer/screenshot/testimonial-page-desktop.png",
      //     screenshotGithubLink:
      //       "https://raw.githubusercontent.com/imranwijaya/devchallenges/main/public/asset/responsive-web-developer/screenshot/testimonial-page-desktop.png",
      //   },
      // },
      // {
      //   name: "Contact Page",
      //   href: "/responsive-web-developer/contact-page",
      //   exact: true,
      //   section: "Responsive Web Developer",
      //   // image: "",
      //   readmeHref: "/responsive-web-developer/contact-page/readme",
      //   readmeContent: {
      //     demoLink:
      //       "https://devchallenges-solutions.vercel.app/responsive-web-developer/contact-page",
      //     solutionLink:
      //       "https://github.com/imranwijaya/devchallenges/tree/main/src/app/responsive-web-developer/contact-page",
      //     screenshotLink:
      //       "/asset/responsive-web-developer/screenshot/contact-page-desktop.png",
      //     screenshotGithubLink:
      //       "https://raw.githubusercontent.com/imranwijaya/devchallenges/main/public/asset/responsive-web-developer/screenshot/contact-page-desktop.png",
      //   },
      // },
      // {
      //   name: "Simple Homepage - Alarado",
      //   href: "/responsive-web-developer/simple-homepage-alarado",
      //   exact: true,
      //   section: "Responsive Web Developer",
      //   // image: "",
      //   readmeHref: "/responsive-web-developer/simple-homepage-alarado/readme",
      //   readmeContent: {
      //     demoLink:
      //       "https://devchallenges-solutions.vercel.app/responsive-web-developer/simple-homepage-alarado",
      //     solutionLink:
      //       "https://github.com/imranwijaya/devchallenges/tree/main/src/app/responsive-web-developer/simple-homepage-alarado",
      //     screenshotLink:
      //       "/asset/responsive-web-developer/screenshot/simple-homepage-alarado-desktop.png",
      //     screenshotGithubLink:
      //       "https://raw.githubusercontent.com/imranwijaya/devchallenges/main/public/asset/responsive-web-developer/screenshot/simple-homepage-alarado-desktop.png",
      //   },
      // },
    ],
  },
  javascriptDeveloper: {
    name: "JavaScript Developer",
    href: "/javascript-developer",
    exact: false,
    section: "JavaScript Developer",
    child: [],
  },
  // frontendDeveloper: {
  //   name: "Frontend Developer",
  //   href: "/frontend-developer",
  //   exact: false,
  //   section: "Frontend Developer",
  //   child: [],
  // },
  // fullstackDeveloper: {
  //   name: "Fullstack Developer",
  //   href: "/fullstack-developer",
  //   exact: false,
  //   section: "Fullstack developer",
  //   child: [],
  // },
};
