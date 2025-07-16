import { useNavigate } from "react-router";
import { useCreateTaskMutation } from "../api/taskApi";
import { addToast } from "@heroui/react";
import { TaskForm } from "@components";

import type { Task } from "../lib";

const TaskCreate = () => {
  const navigate = useNavigate();
  const [createTask, { isLoading }] = useCreateTaskMutation();

  const handleCreate = async (taskData: Task) => {
    const task = { ...taskData, createdAt: new Date() };

    await createTask(task).unwrap();
    navigate(-1);

    addToast({
      title: "Задача",
      description: "Вы создали новую задачу",
      color: "success",
    });
  };

  return (
    <TaskForm
      onSubmit={handleCreate}
      isLoading={isLoading}
      submitText="Создать"
      onCancel={() => navigate(-1)}
    />
  );
};
export default TaskCreate;
