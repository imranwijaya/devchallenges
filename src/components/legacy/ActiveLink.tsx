"use client";
import type { NextPage } from "next";
import NextLink, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React, { PropsWithChildren, useState, useEffect } from "react";

type Props = LinkProps & {
  className?: string;
  activeClassName: string;
  exact?: boolean;
};

const ActiveLink: NextPage<PropsWithChildren<Props>> = ({
  children,
  activeClassName,
  className,
  exact = true,
  ...props
}) => {
  const currentRoute = usePathname();
  const [computedClassName, setComputedClassName] = useState(className);

  useEffect(() => {
    // Dynamic route will be matched via props.as
    // Static route will be matched via props.href
    const linkPathname = new URL(
      (props.as || props.href) as string,
      location.href,
    ).pathname;

    // Using URL().pathname to get rid of query and hash
    const activePathname = currentRoute;

    if (!exact) {
      const hrefClassName = activePathname.startsWith(linkPathname)
        ? `${className} ${activeClassName}`.trim()
        : className;

      if (hrefClassName !== className) {
        return setComputedClassName(hrefClassName);
      }

      return;
    }

    const newClassName =
      linkPathname === activePathname
        ? `${className} ${activeClassName}`.trim()
        : className;

    if (newClassName !== computedClassName) {
      setComputedClassName(newClassName);
    }
  }, [
    currentRoute,
    props.as,
    props.href,
    activeClassName,
    className,
    exact,
    computedClassName,
  ]);

  return (
    <NextLink className={computedClassName} {...props}>
      {children}
    </NextLink>
  );
};

export default ActiveLink;
