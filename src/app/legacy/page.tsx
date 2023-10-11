import type { NextPage, Metadata } from "next";
import NextLink from "next/link";
import { routesArray } from "./_route";

export const metadata: Metadata = {
  title: "Home | devChallenges Solutions",
  description: "Home | devChallenges Solutions",
};

const Home: NextPage = () => {
  const rwd = routesArray.responsiveWebDeveloper.child;
  const fed = routesArray.frontEndDeveloper.child;
  const fsd = routesArray.fullStackDeveloper.child;
  return (
    <div className="flex min-h-screen flex-col bg-[#181719] text-[#BDBDBD] 2xl:container 2xl:mx-auto">
      <main className="flex grow flex-col">
        <section className="flex grow flex-col px-3 py-8 md:px-32 lg:px-60">
          <h1 className="py-5 text-center text-xl font-bold">
            devChallenges Solutions (LEGACY)
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
            <div className="text-gray-600">TODO</div>
          )}
          {/* FRONT-END DEVELOPER */}
          <h2 className="py-3 text-lg font-bold">Front-end Developer</h2>
          {fed.length > 0 ? (
            <ul className="list-inside list-disc">
              {fed.map((e, idx) => (
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
            <div className="text-slate-600">TODO</div>
          )}
          {/* FULL-STACK DEVELOPER */}
          <h2 className="py-3 text-lg font-bold">Full-stack Developer</h2>
          {fsd.length > 0 ? (
            <ul className="list-inside list-disc">
              {fsd.map((e, idx) => (
                <li key={idx} className="underline">
                  <NextLink href={e.href}>{e.name}</NextLink>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-gray-600">TODO</div>
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
