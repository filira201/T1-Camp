import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Task } from "../lib";

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    getAllTasks: builder.query<Task[], void>({
      query: () => ({
        url: "/tasks",
        method: "GET",
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
  }),
});

export const {
  useGetAllTasksQuery,
  useGetTaskByIdQuery,
  useUpdateTaskMutation,
} = taskApi;
