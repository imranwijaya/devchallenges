import type { NextPage, Metadata } from "next";
import Input from "./components/Input";

export const metadata: Metadata = {
  title: "Input component | Front-end Developer",
  description: "Input component | Front-end Developer",
};

const Page: NextPage = () => {
  return (
    <section className="input-variable input-icon-variable input-label-variable space-y-10 px-3 py-7">
      <h1 className="font-poppins text-2xl font-medium text-[#4F4F4F]">
        Inputs
      </h1>
      <div className="grid gap-y-8">
        <div className="grid grid-cols-1 gap-x-4 lg:grid-cols-3">
          <div className="flex flex-col justify-between gap-y-3">
            <div className="font-ubuntu-mono text-xs text-[#333]">
              {`<Input />`}
            </div>
            <div>
              <Input />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-3">
            <div className="font-ubuntu-mono text-xs text-[#828282]">
              {`&:hover`}
            </div>
            <div>
              <Input hovered />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-3">
            <div className="font-ubuntu-mono text-xs text-[#828282]">
              {`&:focus`}
            </div>
            <div>
              <Input focused />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-4 lg:grid-cols-3">
          <div className="flex flex-col justify-between gap-y-3">
            <div className="font-ubuntu-mono text-xs text-[#333]">
              {`<Input error />`}
            </div>
            <div>
              <Input error />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-3">
            <div className="font-ubuntu-mono text-xs text-[#828282]">
              {`&:hover`}
            </div>
            <div>
              <Input error hovered />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-3">
            <div className="font-ubuntu-mono text-xs text-[#828282]">
              {`&:focus`}
            </div>
            <div>
              <Input error focused />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-4 lg:grid-cols-3">
          <div className="flex flex-col justify-between gap-y-3">
            <div className="font-ubuntu-mono text-xs text-[#333]">
              {`<Input disabled />`}
            </div>
            <div>
              <Input disabled />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-4 lg:grid-cols-3">
          <div className="flex flex-col justify-between gap-y-3">
            <div className="font-ubuntu-mono text-xs text-[#333]">
              {`<Input helperText="Some interesting text" />`}
            </div>
            <div>
              <Input helperText="Some interesting text" />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-3">
            <div className="font-ubuntu-mono text-xs text-[#333]">
              {`<Input helperText="Some interesting text" error />`}
            </div>
            <div>
              <Input helperText="Some interesting text" error />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-4 lg:grid-cols-3">
          <div className="flex flex-col justify-between gap-y-3">
            <div className="font-ubuntu-mono text-xs text-[#333]">
              {`<Input startIcon="phone" />`}
            </div>
            <div>
              <Input startIcon="phone" />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-3">
            <div className="font-ubuntu-mono text-xs text-[#333]">
              {`<Input endIcon="lock" />`}
            </div>
            <div>
              <Input endIcon="lock" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-4 lg:grid-cols-3">
          <div className="flex flex-col justify-between gap-y-3">
            <div className="font-ubuntu-mono text-xs text-[#333]">
              {`<Input defaultValue="Text" />`}
            </div>
            <div>
              <Input defaultValue="Text" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-4 lg:grid-cols-3">
          <div className="flex flex-col justify-between gap-y-3">
            <div className="font-ubuntu-mono text-xs text-[#333]">
              {`<Input size="sm" />`}
            </div>
            <div>
              <Input size="sm" />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-3">
            <div className="font-ubuntu-mono text-xs text-[#333]">
              {`<Input size="md" />`}
            </div>
            <div>
              <Input size="md" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-4">
          <div className="flex flex-col justify-between gap-y-3">
            <div className="font-ubuntu-mono text-xs text-[#333]">
              {`<Input fullWidth />`}
            </div>
            <div>
              <Input fullWidth />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-4">
          <div className="flex flex-col justify-between gap-y-3">
            <div className="font-ubuntu-mono text-xs text-[#333]">
              {`<Input multiline row="4" />`}
            </div>
            <div>
              <Input multiline row="4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
