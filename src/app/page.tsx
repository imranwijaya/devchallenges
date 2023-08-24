import type { NextPage, Metadata } from "next";
import type { StaticImageData } from "next/image";
import NextLink from "next/link";
import notFoundDesktop from "@public/asset/screenshot/404-not-found-desktop.png";
import myTeamPageDesktop from "@public/asset/screenshot/my-team-page-desktop.png";
import interiorConsultantDesktop from "@public/asset/screenshot/interior-consultant-desktop.png";
import recipePageDesktop from "@public/asset/screenshot/recipe-page-desktop.png";
import myGalleryDesktop from "@public/asset/screenshot/my-gallery-desktop.png";
import checkoutPageDesktop from "@public/asset/screenshot/checkout-page-desktop.png";
import edieHomepageDesktop from "@public/asset/screenshot/edie-homepage-desktop.png";
import portfolioDesktop from "@public/asset/screenshot/portfolio-desktop.png";

type Page = {
  name: string;
  href: string;
  section: string;
  image?: string | StaticImageData;
  readmeHref?: string;
  readmeName?: string;
};

const rwdPages: Page[] = [
  {
    name: "404 Not Found",
    href: "/404-not-found",
    section: "Responsive Web Developer",
    image: notFoundDesktop,
    readmeHref: "/404-not-found/readme",
  },
  {
    name: "My team page",
    href: "/my-team-page",
    section: "Responsive Web Developer",
    image: myTeamPageDesktop,
    readmeHref: "/my-team-page/readme",
  },
  {
    name: "Interior Consultant",
    href: "/interior-consultant",
    section: "Responsive Web Developer",
    image: interiorConsultantDesktop,
    readmeHref: "/interior-consultant/readme",
  },
  {
    name: "Recipe page",
    href: "/recipe-page",
    section: "Responsive Web Developer",
    image: recipePageDesktop,
    readmeHref: "/recipe-page/readme",
  },
  {
    name: "My Gallery",
    href: "/my-gallery",
    section: "Responsive Web Developer",
    image: myGalleryDesktop,
    readmeHref: "/my-gallery/readme",
  },
  {
    name: "Checkout Page",
    href: "/checkout-page",
    section: "Responsive Web Developer",
    image: checkoutPageDesktop,
    readmeHref: "/checkout-page/readme",
  },
  {
    name: "Edie homepage",
    href: "/edie-homepage",
    section: "Responsive Web Developer",
    image: edieHomepageDesktop,
    readmeHref: "/edie-homepage/readme",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
    section: "Responsive Web Developer",
    image: portfolioDesktop,
    readmeHref: "/portfolio/readme",
  },
];
const fePages: Page[] = [];
const fsPages: Page[] = [];

export const metadata: Metadata = {
  title: "Home | devChallenges Solutions",
  description: "Home | devChallenges Solutions",
};

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#181719] text-[#BDBDBD] 2xl:container 2xl:mx-auto">
      <main className="flex grow flex-col">
        <section className="flex grow flex-col px-3 py-8 md:px-32 lg:px-60">
          <h1 className="py-5 text-center text-xl font-bold">
            devChallenges Solutions
          </h1>
          {/* RESPONSIVE WEB DEVELOPER */}
          <h2 className="py-3 text-lg font-bold">Responsive Web Developer</h2>
          {rwdPages.length > 0 ? (
            <ul className="list-inside list-disc">
              {rwdPages.map((e, idx) => (
                <li key={idx}>
                  <div className="inline-flex flex-col gap-y-2">
                    <div className="inline-flex flex-row gap-x-2">
                      <NextLink href={e.href} className="underline">
                        {e.name}
                      </NextLink>
                      {e.readmeHref && (
                        <div>
                          (
                          <NextLink href={e.readmeHref} className="underline">
                            readme
                          </NextLink>
                          )
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-gray-600">Work In Progress</div>
          )}
          {/* FRONT-END DEVELOPER */}
          <h2 className="py-3 text-lg font-bold">Front-end Developer</h2>
          {fePages.length > 0 ? (
            <ul className="list-inside list-disc">
              {fePages.map((e, idx) => (
                <li key={idx} className="underline">
                  <NextLink href={e.href}>{e.name}</NextLink>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-slate-600">Work In Progress</div>
          )}
          {/* FULL-STACK DEVELOPER */}
          <h2 className="py-3 text-lg font-bold">Full-stack Developer</h2>
          {fsPages.length > 0 ? (
            <ul className="list-inside list-disc">
              {fsPages.map((e, idx) => (
                <li key={idx} className="underline">
                  <NextLink href={e.href}>{e.name}</NextLink>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-gray-600">Work In Progress</div>
          )}
        </section>
      </main>
      <footer className="sticky top-[100vh]">
        <p className="py-6 text-center font-monsterrat text-sm font-normal text-[#BDBDBD]">
          created by&nbsp;
          <NextLink
            href="https://github.com/imranwijaya"
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="Github"
          >
            <span className="font-bold underline">imranwijaya</span>
          </NextLink>
          &nbsp;- devChallenges.io
        </p>
      </footer>
    </div>
  );
};

export default Home;
