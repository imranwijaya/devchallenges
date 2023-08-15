import type { NextPage } from "next";
import type { TransitionClasses, TransitionEvents } from "@headlessui/react";
import { Fragment, Children, cloneElement } from "react";
import { Dialog, Transition } from "@headlessui/react";

type Props = {
  title: string;
  render: React.ReactElement;
  show: boolean;
  handler: (e: boolean) => void;
  children: React.ReactNode;
} & TransitionClasses &
  TransitionEvents;

const Modal: NextPage<Props> = ({
  title,
  render,
  show,
  handler,
  children,
  ...props
}) => {
  const openModalHandler = () => handler(true);
  const closeModalHandler = () => handler(false);
  const childElement = Children.only(render);
  const renderElement = cloneElement(childElement, {
    onClick: openModalHandler,
  });

  return (
    <>
      {renderElement}
      <Transition appear show={show} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalHandler}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                {...props}
              >
                <Dialog.Panel className="bg-slate-50 w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6"
                  >
                    {title}
                  </Dialog.Title>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
