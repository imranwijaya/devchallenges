"use client";
import type { Task, TaskSchema } from "../schemas/task";
import { createContext, useMemo, useState, useLayoutEffect } from "react";

export type TaskContextProps = {
  tasks: string;
  addTask: (task: TaskSchema) => void;
  completeTask: (id: number) => void;
  deleteTask: (id: number) => void;
  deleteAllTask: () => void;
};

export const TaskContext = createContext<TaskContextProps>({
  tasks: "[]",
  addTask: () => {},
  completeTask: () => {},
  deleteTask: () => {},
  deleteAllTask: () => {},
});

export const TaskProvider = ({
  value = "[]",
  children,
}: {
  value?: string;
  children: React.ReactNode;
}) => {
  const [tasks, setTasks] = useState(value);

  useLayoutEffect(() => {
    const storedTasks = localStorage.getItem("todo");
    setTasks(storedTasks || "[]");
    localStorage.setItem("todo", storedTasks || "[]");
  }, []);

  const getInMemoryTasks = () => {
    const _tasks = tasks;
    const parsedTasks = JSON.parse(_tasks || "[]") as Task[];
    return parsedTasks;
  };

  const addTask = (_task: TaskSchema) => {
    const parsedTasks = getInMemoryTasks();

    const task = {
      id: Date.now(),
      ..._task,
    };

    const _newTasks = [...parsedTasks, task];
    const stringifiedTasks = JSON.stringify(_newTasks);
    setTasks(stringifiedTasks);
    localStorage.setItem("todo", stringifiedTasks);
  };

  const completeTask = (id: number) => {
    const parsedTasks = getInMemoryTasks();

    const mappedTasks = parsedTasks.map((e) => {
      if (e.id === id && e.is_complete === false) {
        return {
          ...e,
          is_complete: true,
        };
      }

      return e;
    });
    const stringifiedTasks = JSON.stringify(mappedTasks);
    setTasks(stringifiedTasks);
    localStorage.setItem("todo", stringifiedTasks);
  };

  const deleteCompletedTask = (id: number) => {
    const parsedTasks = getInMemoryTasks();

    const filteredTasks = parsedTasks.filter((e) => e.id !== id);
    const stringifiedTasks = JSON.stringify(filteredTasks);
    setTasks(stringifiedTasks);
    localStorage.setItem("todo", stringifiedTasks);
  };

  const deleteAllCompletedTask = () => {
    const parsedTasks = getInMemoryTasks();

    const filteredTasks = parsedTasks.filter((e) => e.is_complete !== true);
    const stringifiedTasks = JSON.stringify(filteredTasks);
    setTasks(stringifiedTasks);
    localStorage.setItem("todo", stringifiedTasks);
  };

  const val = useMemo(
    () => ({
      tasks,
      addTask,
      completeTask,
      deleteTask: deleteCompletedTask,
      deleteAllTask: deleteAllCompletedTask,
    }),
    [tasks],
  );

  return <TaskContext.Provider value={val}>{children}</TaskContext.Provider>;
};
