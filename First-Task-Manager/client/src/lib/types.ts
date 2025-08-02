import type { TaskCategory, TaskPriority, TaskStatus } from "./models";

export type ThemeState = {
  darkMode: boolean;
};

type ChipColors = "default" | "primary" | "secondary" | "success" | "warning" | "danger";

export const statusColor: Record<TaskStatus, ChipColors> = {
  "To Do": "primary",
  "In Progress": "secondary",
  Done: "success",
};

export const categoryColor: Record<TaskCategory, ChipColors> = {
  Bug: "danger",
  Feature: "primary",
  Documentation: "secondary",
  Refactor: "warning",
  Test: "default",
};

export const priorityColor: Record<TaskPriority, ChipColors> = {
  Low: "default",
  Medium: "primary",
  High: "danger",
};
