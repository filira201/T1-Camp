import type { TASK_CATEGORY, TASK_PRIORITY, TASK_STATUS } from "./constants";

export type Task = {
  id: string;
  title: string;
  description?: string;
  category: TaskCategory;
  status: TaskStatus;
  priority: TaskPriority;
  createdAt: Date;
};

export type TaskCategory = (typeof TASK_CATEGORY)[number];
export type TaskStatus = (typeof TASK_STATUS)[number];
export type TaskPriority = (typeof TASK_PRIORITY)[number];
