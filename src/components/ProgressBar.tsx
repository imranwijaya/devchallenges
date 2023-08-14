"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { onComplete } from "@/libs/router-events";

function HandleOnCompleteChild() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => onComplete(), [pathname, searchParams]);
  return null;
}

/** https://github.com/joulev/nextjs13-appdir-router-events */
const ProgressBar = () => {
  return (
    <Suspense>
      <HandleOnCompleteChild />
    </Suspense>
  );
};

export default ProgressBar;
