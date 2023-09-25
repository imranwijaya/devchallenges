"use client";
import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type TaskSchema, taskSchema } from "../schemas/task";
import { useCallback, useContext } from "react";
import { TaskContext } from "./Provider";

const Form: NextPage = () => {
  const { addTask } = useContext(TaskContext);

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<TaskSchema>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      task: "",
      is_complete: false,
    },
  });

  const onSubmit = useCallback(
    (data: TaskSchema) => {
      if (!isDirty || typeof window === "undefined") return;

      addTask(data);
      reset();
    },
    [isDirty],
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full gap-6">
      <input
        type="text"
        disabled={isSubmitting}
        {...register("task")}
        placeholder="add details"
        className="w-full rounded-xl px-3 py-5 placeholder:text-sm placeholder:text-[rgba(130,130,130,1)] focus:ring-[rgba(47,128,237,1)]"
      />
      <button
        type="submit"
        className="rounded-xl bg-[rgba(47,128,237,1)] px-10 py-5 text-sm font-semibold text-white shadow-[0px_2px_6px_0px] shadow-[rgba(127,177,243,0.40)]"
      >
        Add
      </button>
    </form>
  );
};

export default Form;
