"use client";
import type { NextPage } from "next";
import { useState, useEffect } from "react";
import NextImage from "next/image";
import NextLink from "next/link";
import { projects, projectTags, type ProjectTag } from "../_content";

const Project: NextPage = () => {
  const [tag, setTag] = useState<ProjectTag | null>(null);
  const [projectFiltered, setProjectFiltered] = useState(projects);

  useEffect(() => {
    if (tag !== null) {
      const filtered = projects.filter((e) => e.tag.includes(tag));
      return setProjectFiltered(filtered);
    }

    return setProjectFiltered(projects);
  }, [projects, tag]);

  const tagClassName = "bg-[#2F80ED] text-white";

  return (
    <section className="space-y-4">
      <div className="rounded-xl bg-white p-4 lg:p-6">
        <h2 className="text-lg font-medium">
          Projects ({projectFiltered.length})
        </h2>
        <div className="space-x-2 space-y-2 break-words font-medium">
          <div
            className={`inline-block select-none rounded-xl px-2 py-1 ${
              tag === null
                ? "cursor-not-allowed border-[#2F80ED] bg-[#2F80ED] text-white"
                : "border bg-inherit text-inherit hover:cursor-pointer hover:border-[#2F80ED] hover:bg-[#2F80ED] hover:text-white"
            }`}
            onClick={() => setTag(null)}
          >
            <span className="text-sm">All</span>
          </div>
          {projectTags.map((e, idx) => (
            <div
              key={idx}
              className={`inline-block select-none rounded-xl px-2 py-1 ${
                tag === e
                  ? "cursor-not-allowed border-[#2F80ED] bg-[#2F80ED] text-white"
                  : "border bg-inherit text-inherit hover:cursor-pointer hover:border-[#2F80ED] hover:bg-[#2F80ED] hover:text-white"
              }`}
              onClick={() => setTag(e)}
            >
              <span className="text-sm">{e}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-9">
        {projectFiltered.map((e, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-x-6 gap-y-4 rounded-xl bg-white p-4 lg:flex-row lg:p-6"
          >
            <div className="relative my-auto aspect-square w-full overflow-hidden rounded-xl hover:shadow-md lg:h-2/5 lg:w-2/5">
              <NextImage
                src={e.image}
                alt={e.imageAlt}
                className="aspect-square rounded-xl object-cover object-left-top transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
                priority={idx === 0}
              />
            </div>
            <div className="w-full space-y-4 lg:w-3/5 lg:space-y-6">
              <div className="w-full space-x-2 break-words">
                {e.tag.map((el, i) => (
                  <span
                    key={i}
                    className={`select-none text-sm font-medium lg:text-base ${
                      tag === el
                        ? "cursor-not-allowed font-semibold text-[#2F80ED]"
                        : "text-inherit hover:cursor-pointer hover:text-[#2F80ED]"
                    }`}
                    onClick={() => setTag(el)}
                  >
                    #{el}
                  </span>
                ))}
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-medium text-[#333333]">
                  {e.title}
                </h3>
                <p className="break-words text-sm font-medium text-[#828282] lg:text-base">
                  {e.description}
                </p>
              </div>
              <div className="flex flex-row justify-center gap-x-3 lg:justify-normal">
                <NextLink
                  href={e.hrefDemo}
                  className="rounded-xl bg-[#2F80ED] px-9 py-2"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <span className="text-base font-medium text-white lg:text-lg">
                    Demo
                  </span>
                </NextLink>
                <NextLink
                  href={e.hrefCode}
                  className="rounded-xl border border-[#2F80ED] px-9 py-2"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <span className="text-base font-medium text-[#2F80ED] lg:text-lg">
                    Code
                  </span>
                </NextLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
