import type { NextPage, Metadata } from "next";
import NextLink from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { routesArray } from "./_route";

export const metadata: Metadata = {
  title: "Home | devChallenges Solutions",
  description: "Home | devChallenges Solutions",
};

const Home: NextPage = () => {
  const rwd = routesArray.responsiveWebDeveloper.child;

  return (
    <div className="flex min-h-screen flex-col bg-[#181719] text-[rgba(189,189,189,1)] 2xl:container 2xl:mx-auto">
      <main className="flex grow flex-col">
        <section className="flex grow flex-col px-3 py-8 md:px-32 lg:px-60">
          <h1 className="py-5 text-center text-xl font-bold">
            devChallenges Solutions
          </h1>

          {/* RESPONSIVE WEB DEVELOPER */}
          <h2 className="py-3 text-lg font-bold">Responsive Web Developer</h2>
          {rwd.length > 0 ? (
            <ul className="list-inside list-disc">
              {rwd.map((e, idx) => (
                <li key={idx}>
                  <div className="inline-flex flex-col gap-y-2">
                    <div className="inline-flex flex-row gap-x-2">
                      <NextLink href={e.href} className="underline">
                        {e.name}
                      </NextLink>
                      {/* {e.readmeHref && (
                        <div>
                          (
                          <NextLink href={e.readmeHref} className="underline">
                            readme
                          </NextLink>
                          )
                        </div>
                      )} */}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-gray-600">TODO</div>
          )}

          {/* JAVASCRIPT DEVELOPER */}
          <h2 className="py-3 text-lg font-bold">JavaScript Developer</h2>
          <div className="text-slate-600">TODO</div>
          {/* FRONTEND DEVELOPER */}
          <h2 className="py-3 text-lg font-bold">Frontend Developer</h2>
          <div className="text-slate-600">TODO</div>
          {/* FULLSTACK DEVELOPER */}
          <h2 className="py-3 text-lg font-bold">Fullstack Developer</h2>
          <div className="text-slate-600">TODO</div>
        </section>
        <section className="flex grow flex-col px-3 py-8 md:px-32 lg:px-60">
          <div className="inline">
            <NextLink
              href="/legacy"
              className="flex flex-row items-center gap-x-2 hover:text-blue-600"
            >
              devChallenges Solutions (LEGACY)
              <ArrowLongRightIcon className="h-5 w-5" />
            </NextLink>
          </div>
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
