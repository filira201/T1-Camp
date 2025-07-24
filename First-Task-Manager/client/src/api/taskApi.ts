import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { Task } from "@/lib";
import type { TaskData } from "@/lib";

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    getAllTasks: builder.query<TaskData, { page: number; perPage: number }>({
      query: ({ page, perPage }) => ({
        url: "/tasks",
        method: "GET",
        params: {
          _page: page,
          _per_page: perPage,
        },
      }),
      providesTags: ["Tasks"],
    }),

    getTaskById: builder.query<Task, string>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "GET",
      }),
      providesTags: ["Tasks"],
    }),

    updateTask: builder.mutation<Task, { taskData: Task; id: string }>({
      query: ({ taskData, id }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: taskData,
      }),
      invalidatesTags: ["Tasks"],
    }),

    createTask: builder.mutation<Task, Task>({
      query: (task) => ({
        url: "/tasks",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Tasks"],
    }),

    deleteTask: builder.mutation<void, string>({
      query: (taskId) => ({
        url: `/tasks/${taskId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const {
  useGetAllTasksQuery,
  useGetTaskByIdQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
  useCreateTaskMutation,
} = taskApi;
