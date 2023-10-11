import type { NextPage, Metadata } from "next";
import Button from "./components/Button";

export const metadata: Metadata = {
  title: "Button component | Front-end Developer",
  description: "Button component | Front-end Developer",
};

const Page: NextPage = () => {
  return (
    <section className="btn-variable space-y-10 px-3 py-7">
      <h1 className="font-poppins text-2xl font-medium text-[#4F4F4F]">
        Buttons
      </h1>
      <div className="grid gap-y-8">
        {/* SOLID BUTTON */}
        <div className="grid grid-cols-2 gap-x-4 md:grid-cols-4">
          <div className="flex flex-col justify-between gap-y-3">
            <div className="font-ubuntu-mono text-xs text-[#333]">
              {`<Button />`}
            </div>
            <div>
              <Button />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-3">
            <div className="font-ubuntu-mono text-xs text-[#828282]">
              {`&:hover, &:focus`}
            </div>
            <div>
              <Button hovered focused>
                Default
              </Button>
            </div>
          </div>
        </div>
        {/* OUTLINE BUTTON */}
        <div className="grid grid-cols-2 gap-x-4 md:grid-cols-4">
          <div className="flex flex-col justify-between gap-y-3">
            <div className="font-ubuntu-mono text-xs text-[#333]">
              {`<Button variant="outline" color="primary" />`}
            </div>
            <div>
              <Button variant="outline" color="primary">
                Primary
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-3">
            <div className="font-ubuntu-mono text-xs text-[#828282]">
              {`&:hover, &:focus`}
            </div>
            <div>
              <Button variant="outline" color="primary" hovered focused>
                Primary
              </Button>
            </div>
          </div>
        </div>
        {/* TEXT BUTTON */}
        <div className="grid grid-cols-2 gap-x-4 md:grid-cols-4">
          <div className="flex flex-col justify-between gap-y-3">
            <div className="font-ubuntu-mono text-xs text-[#333]">
              {`<Button variant="text" color="primary" />`}
            </div>
            <div>
              <Button variant="text" color="primary">
                Primary
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-3">
            <div className="font-ubuntu-mono text-xs text-[#828282]">
              {`&:hover, &:focus`}
            </div>
            <div>
              <Button variant="text" color="primary" hovered focused>
                Primary
              </Button>
            </div>
          </div>
        </div>
        {/* DISABLED SHADOW */}
        <div className="grid grid-cols-1 gap-x-4 md:grid-cols-4">
          <div className="flex flex-col justify-between gap-y-3">
            <div className="font-ubuntu-mono text-xs text-[#333]">
              {`<Button disableShadow color="primary" />`}
            </div>
            <div>
              <Button disableShadow color="primary">
                Primary
              </Button>
            </div>
          </div>
        </div>
        {/* DISABLED BUTTON */}
        <div className="grid grid-cols-2 gap-x-4 md:grid-cols-4">
          <div className="flex flex-col justify-between gap-y-3">
            <div className="font-ubuntu-mono text-xs text-[#333]">
              {`<Button disabled />`}
            </div>
            <div>
              <Button disabled>Default</Button>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-3">
            <div className="font-ubuntu-mono text-xs text-[#333]">
              {`<Button variant="text" disabled />`}
            </div>
            <div>
              <Button variant="text" disabled>
                Default
              </Button>
            </div>
          </div>
        </div>
        {/* ICON BUTTON */}
        <div className="grid grid-cols-2 gap-x-4 md:grid-cols-4">
          <div className="flex flex-col justify-between gap-y-3">
            <div className="break-words font-ubuntu-mono text-xs text-[#333]">
              {`<Button startIcon="local_grocery_store" color="primary" />`}
            </div>
            <div>
              <Button startIcon="local_grocery_store" color="primary">
                Primary
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-3">
            <div className="break-words font-ubuntu-mono text-xs text-[#333]">
              {`<Button endIcon="local_grocery_store" color="primary" />`}
            </div>
            <div>
              <Button endIcon="local_grocery_store" color="primary">
                Primary
              </Button>
            </div>
          </div>
        </div>
        {/* BUTTON SIZE */}
        <div className="grid grid-cols-3 gap-x-4 md:grid-cols-4">
          <div className="flex flex-col justify-between gap-y-3">
            <div className="font-ubuntu-mono text-xs text-[#333]">
              {`<Button size="sm" color="primary" />`}
            </div>
            <div>
              <Button size="sm" color="primary">
                Primary
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-3">
            <div className="font-ubuntu-mono text-xs text-[#333]">
              {`<Button size="md" color="primary" />`}
            </div>
            <div>
              <Button size="md" color="primary">
                Primary
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-3">
            <div className="font-ubuntu-mono text-xs text-[#333]">
              {`<Button size="lg" color="primary" />`}
            </div>
            <div>
              <Button size="lg" color="primary">
                Primary
              </Button>
            </div>
          </div>
        </div>
        {/* BUTTON COLOR */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
          {/* DEFAULT */}
          <div className="grid grid-cols-1 grid-rows-2 gap-y-8">
            <div className="flex flex-col justify-between gap-y-3">
              <div className="font-ubuntu-mono text-xs text-[#333]">
                {`<Button color="default" />`}
              </div>
              <div>
                <Button color="default">Default</Button>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-y-3">
              <div className="font-ubuntu-mono text-xs text-[#828282]">
                {`&:hover, &:focus`}
              </div>
              <div>
                <Button color="default" hovered focused>
                  Default
                </Button>
              </div>
            </div>
          </div>
          {/* PRIMARY */}
          <div className="grid grid-cols-1 grid-rows-2 gap-y-8">
            <div className="flex flex-col justify-between gap-y-3">
              <div className="font-ubuntu-mono text-xs text-[#333]">
                {`<Button color="primary" />`}
              </div>
              <div>
                <Button color="primary">Primary</Button>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-y-3">
              <div className="font-ubuntu-mono text-xs text-[#828282]">
                {`&:hover, &:focus`}
              </div>
              <div>
                <Button color="primary" hovered focused>
                  Primary
                </Button>
              </div>
            </div>
          </div>
          {/* SECONDARY */}
          <div className="grid grid-cols-1 grid-rows-2 gap-y-8">
            <div className="flex flex-col justify-between gap-y-3">
              <div className="font-ubuntu-mono text-xs text-[#333]">
                {`<Button color="secondary" />`}
              </div>
              <div>
                <Button color="secondary">Secondary</Button>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-y-3">
              <div className="font-ubuntu-mono text-xs text-[#828282]">
                {`&:hover, &:focus`}
              </div>
              <div>
                <Button color="secondary" hovered focused>
                  Secondary
                </Button>
              </div>
            </div>
          </div>
          {/* DANGER */}
          <div className="grid grid-cols-1 grid-rows-2 gap-y-8">
            <div className="flex flex-col justify-between gap-y-3">
              <div className="font-ubuntu-mono text-xs text-[#333]">
                {`<Button color="danger" />`}
              </div>
              <div>
                <Button color="danger">Danger</Button>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-y-3">
              <div className="font-ubuntu-mono text-xs text-[#828282]">
                {`&:hover, &:focus`}
              </div>
              <div>
                <Button color="danger" hovered focused>
                  Danger
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
