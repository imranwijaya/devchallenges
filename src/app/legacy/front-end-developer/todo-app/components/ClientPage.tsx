"use client";
import type { NextPage } from "next";
import type { Task } from "../schemas/task";
import { Fragment, useContext } from "react";
import { Tab } from "@headlessui/react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { TaskContext } from "./Provider";
import Form from "./Form";

const ClientPage: NextPage = () => {
  const { tasks, completeTask, deleteTask, deleteAllTask } =
    useContext(TaskContext);
  const parsedTasks = JSON.parse(tasks) as Task[];

  return (
    <div className="mx-auto max-w-3xl px-3 pt-8 lg:px-0">
      <Tab.Group>
        <Tab.List className="relative flex w-full flex-row items-center justify-around border-b border-[rgba(189,189,189,1)]">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`flex justify-center rounded-[0.25rem] px-7 py-4 text-sm font-semibold hover:bg-[rgba(47,128,237,0.1)] focus-visible:outline-none ${
                  selected &&
                  "after:absolute after:bottom-0 after:block after:h-1 after:w-[5.6rem] after:rounded-t after:border-t-4 after:border-t-[rgba(47,128,237,1)]"
                }`}
              >
                All
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`flex justify-center rounded-[0.25rem] px-7 py-4 text-sm font-semibold hover:bg-[rgba(47,128,237,0.1)] focus-visible:outline-none ${
                  selected &&
                  "after:absolute after:bottom-0 after:block after:h-1 after:w-[5.6rem] after:rounded-t after:border-t-4 after:border-t-[rgba(47,128,237,1)]"
                }`}
              >
                Active
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`flex justify-center rounded-[0.25rem] px-7 py-4 text-sm font-semibold hover:bg-[rgba(47,128,237,0.1)] focus-visible:outline-none ${
                  selected &&
                  "after:absolute after:bottom-0 after:block after:h-1 after:w-[5.6rem] after:rounded-t after:border-t-4 after:border-t-[rgba(47,128,237,1)]"
                }`}
              >
                Completed
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className="flex flex-col gap-y-8 py-4">
          <Form />
          <Tab.Panel>
            <ul className="flex flex-col gap-y-7">
              {parsedTasks.length > 0 ? (
                parsedTasks.map((e) => (
                  <li key={e.id} className="inline-flex items-start gap-x-2">
                    <input
                      type="checkbox"
                      checked={e.is_complete}
                      name={`task-${e.id}`}
                      className={`mt-1 ${
                        e.is_complete ? "cursor-default" : "cursor-pointer"
                      } rounded border-[rgba(130,130,130,1)] focus:ring-transparent`}
                      disabled={e.is_complete}
                      onChange={(event) =>
                        event.target.checked === true && completeTask(e.id)
                      }
                    />
                    <span
                      className={`text-lg font-medium ${
                        e.is_complete
                          ? "text-inherit line-through"
                          : "text-black"
                      }`}
                    >
                      {e.task}
                    </span>
                  </li>
                ))
              ) : (
                <li className="w-full text-center text-sm text-[rgba(130,130,130,1)]">
                  no task
                </li>
              )}
            </ul>
          </Tab.Panel>
          <Tab.Panel>
            <ul className="flex flex-col gap-y-7">
              {parsedTasks.length > 0 &&
              parsedTasks.some((e) => e.is_complete === false) ? (
                parsedTasks.map(
                  (e) =>
                    !e.is_complete && (
                      <li
                        key={e.id}
                        className="inline-flex items-start gap-x-2"
                      >
                        <input
                          type="checkbox"
                          checked={e.is_complete}
                          name={`task-${e.id}`}
                          className={`mt-1 ${
                            e.is_complete ? "cursor-default" : "cursor-pointer"
                          } rounded border-[rgba(130,130,130,1)] focus:ring-transparent`}
                          disabled={e.is_complete}
                          onChange={(event) =>
                            event.target.checked === true && completeTask(e.id)
                          }
                        />
                        <span
                          className={`text-lg font-medium ${
                            e.is_complete
                              ? "text-inherit line-through"
                              : "text-black"
                          }`}
                        >
                          {e.task}
                        </span>
                      </li>
                    ),
                )
              ) : (
                <li className="w-full text-center text-sm text-[rgba(130,130,130,1)]">
                  no active task
                </li>
              )}
            </ul>
          </Tab.Panel>
          <Tab.Panel>
            <>
              <ul className="flex flex-col gap-y-7 pb-8">
                {parsedTasks.length > 0 &&
                parsedTasks.some((e) => e.is_complete === true) ? (
                  parsedTasks.map(
                    (e) =>
                      e.is_complete && (
                        <li
                          key={e.id}
                          className="inline-flex justify-between gap-x-2"
                        >
                          <div className="inline-flex items-start gap-x-2">
                            <input
                              type="checkbox"
                              checked={e.is_complete}
                              name={`task-${e.id}`}
                              className={`mt-1 ${
                                e.is_complete
                                  ? "cursor-default"
                                  : "cursor-pointer"
                              } rounded border-[rgba(130,130,130,1)] focus:ring-transparent`}
                              disabled={e.is_complete}
                              onChange={(event) =>
                                event.target.checked === true &&
                                completeTask(e.id)
                              }
                            />
                            <span
                              className={`text-lg font-medium ${
                                e.is_complete
                                  ? "text-inherit line-through"
                                  : "text-black"
                              }`}
                            >
                              {e.task}
                            </span>
                          </div>
                          <button
                            className=""
                            type="button"
                            aria-label="Delete this completed task"
                            onClick={() => e.is_complete && deleteTask(e.id)}
                          >
                            <TrashIcon className="h-5 w-5" />
                          </button>
                        </li>
                      ),
                  )
                ) : (
                  <li className="w-full text-center text-sm text-[rgba(130,130,130,1)]">
                    no task completed
                  </li>
                )}
              </ul>
              {parsedTasks.length > 0 &&
              parsedTasks.some((e) => e.is_complete === true) ? (
                <div className="flex w-full items-center justify-end">
                  <button
                    className="flex items-center gap-x-2 rounded-[0.25rem] bg-[rgba(235,87,87,1)] px-7 py-3 text-white"
                    type="button"
                    aria-label="Delete all completed task"
                    onClick={() => deleteAllTask()}
                  >
                    <TrashIcon className="h-3 w-3" />
                    <span className="text-xs font-semibold">delete all</span>
                  </button>
                </div>
              ) : null}
            </>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default ClientPage;
