"use client";
import type { UrlObject } from "url";
import _formaturl from "next/dist/shared/lib/router/utils/format-url";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { forwardRef } from "react";
import { onStart, shouldTriggerStartEvent } from "@/libs/router-events";

function formatStringOrUrl(urlObjOrString: UrlObject | string): string {
  if (typeof urlObjOrString === "string") {
    return urlObjOrString;
  }

  return _formaturl.formatUrl(urlObjOrString);
}

type LinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof NextLinkProps
> &
  NextLinkProps & {
    children?: React.ReactNode;
  };

/** https://github.com/joulev/nextjs13-appdir-router-events */
const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { href, onClick, ...rest },
  ref,
) {
  const hrefString = formatStringOrUrl(href);
  const useLink = hrefString.startsWith("/");

  if (!useLink) {
    return <a href={hrefString} onClick={onClick} {...rest} />;
  }

  return (
    <NextLink
      href={href}
      onClick={(event) => {
        if (shouldTriggerStartEvent(hrefString, event)) {
          onStart();
        }
        if (onClick) {
          onClick(event);
        }
      }}
      {...rest}
      ref={ref}
    />
  );
});

export default Link;
