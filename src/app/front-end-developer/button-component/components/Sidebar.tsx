import type { NextPage } from "next";
import ActiveLink from "@/components/ActiveLink";
import { menus } from "../_content";

const Sidebar: NextPage = () => {
  return (
    <>
      {menus.map((e, idx) => (
        <div key={idx} className="group">
          <ActiveLink
            href={e.href}
            className="block px-4 py-2 text-sm"
            activeClassName="active peer font-bold text-[#090F31]"
          >
            {e.name}
          </ActiveLink>
        </div>
      ))}
    </>
  );
};

export default Sidebar;
