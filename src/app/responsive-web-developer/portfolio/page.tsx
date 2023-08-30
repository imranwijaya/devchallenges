import type { NextPage, Metadata } from "next";
import NextImage from "next/image";
import NextLink from "next/link";
import Project from "./components/Project";
import userImage from "@public/asset/responsive-web-developer/portfolio/user-image.png";
import {
  experiences,
  hobbies,
  frontEndSkills,
  blogs,
  backEndSkills,
} from "./_content";

export const metadata: Metadata = {
  title: "Portfolio | Responsive Web Developer",
  description: "Portfolio | Responsive Web Developer",
};

const Page: NextPage = () => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-11 px-3 py-8 md:px-28 lg:grid-cols-3 lg:px-28 lg:pt-28">
      <div className="grid grid-cols-1 gap-y-11">
        <section className="space-y-6 rounded-xl bg-white p-4 lg:p-6">
          <div>
            <NextImage
              src={userImage}
              alt="image"
              className="aspect-square w-full rounded-xl object-cover object-top"
              priority
            />
          </div>
          <div className="space-y-8">
            <div className="space-y-1">
              <h3 className="text-2xl font-semibold">Billy Pearson</h3>
              <p className="text-lg font-medium text-[#828282]">
                Front-end developer
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-lg font-medium">billy@example.com</div>
              <div className="text-lg font-medium">(+603) 546 624 342</div>
            </div>
            <div className="text-lg font-medium text-[#828282]">
              Self-motivated developer, who is willing to learn and create
              outstanding UI applications.
            </div>
          </div>
        </section>

        <section className="space-y-11 rounded-xl bg-white p-4 lg:p-6">
          <div>
            <h2 className="text-2xl font-medium">Experiences</h2>
          </div>
          <div className="space-y-9">
            {experiences.map((e, idx) => (
              <div key={idx} className="flex flex-row gap-x-2 lg:gap-x-4">
                <div className="flex-none py-1">
                  <NextImage
                    src={e.image}
                    alt={e.imageAlt}
                    className="aspect-square w-[5.25rem] rounded-xl"
                    title={e.imageAlt}
                  />
                </div>
                <div className="flex flex-col gap-y-3">
                  <div>
                    <p className="font-medium text-[#828282] lg:text-sm">
                      {e.date}
                    </p>
                    <h3 className="font-semibold text-[#333333]">{e.title}</h3>
                  </div>
                  <p className="font-medium text-[#828282]">{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6 rounded-xl bg-white p-4 lg:p-6">
          <div>
            <h2 className="text-2xl font-medium">Hobbies</h2>
          </div>
          <div className="space-y-9">
            {hobbies.map((e, idx) => (
              <div key={idx} className="flex flex-col gap-y-4">
                <div className="flex-none">
                  <NextImage
                    src={e.image}
                    alt={e.imageAlt}
                    className="aspect-[23/9] w-full rounded-xl object-cover object-center"
                  />
                </div>
                <div className="flex flex-col gap-y-3">
                  <div>
                    <h3 className="font-semibold lg:text-2xl">{e.title}</h3>
                  </div>
                  <p>{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="lg:col-span-2">
        <div className="grid grid-cols-1 gap-y-11">
          <section className="grid grid-cols-1 gap-x-8 gap-y-11 lg:grid-cols-2 lg:flex-row">
            <div>
              <div className="space-y-4 rounded-xl bg-white p-4 lg:p-6">
                <div className="text-lg font-bold uppercase">Front end</div>
                <div className="space-y-4">
                  {frontEndSkills.map((e, idx) => (
                    <div
                      key={idx}
                      className="flex flex-row items-center justify-between"
                    >
                      <h4 className="font-medium">{e.name}</h4>
                      <div className="h-2 w-40 rounded-full bg-[#C4C4C4]">
                        <div
                          className={`h-2 rounded-full bg-[#2F80ED]`}
                          style={{ width: `${e.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-4 rounded-xl bg-white p-4 lg:p-6">
                <div className="text-lg font-bold uppercase">Back end</div>
                <div className="space-y-4">
                  {backEndSkills.map((e, idx) => (
                    <div
                      key={idx}
                      className="flex flex-row items-center justify-between"
                    >
                      <h4 className="font-medium">{e.name}</h4>
                      <div className="h-2 w-40 rounded-full bg-[#C4C4C4]">
                        <div
                          className={`h-2 rounded-full bg-[#2F80ED]`}
                          style={{ width: `${e.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <Project />

          <section className="space-y-4">
            <div className="rounded-xl bg-white p-4 lg:p-6">
              <h2 className="text-lg font-medium">Blogs ({blogs.length})</h2>
            </div>
            <div className="space-y-9">
              {blogs.map((e, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-x-6 gap-y-4 rounded-xl bg-white p-4 lg:flex-row-reverse lg:items-center lg:justify-between lg:p-6 lg:pr-0"
                >
                  <div className="w-full flex-none lg:w-1/2">
                    <NextImage
                      src={e.image}
                      alt={e.imageAlt}
                      className="aspect-[4/3] w-full rounded-xl object-cover lg:rounded-r-none"
                    />
                  </div>
                  <div className="space-y-4 lg:space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-medium text-[#333333]">
                        {e.title}
                      </h3>
                      <p className="text-sm font-medium text-[#828282] lg:text-base">
                        {e.description}
                      </p>
                    </div>
                    <div className="flex flex-row justify-normal gap-x-3">
                      <NextLink
                        href={e.href}
                        className="pt-2 text-[#2F80ED]"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        {e.hrefName}
                      </NextLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;
