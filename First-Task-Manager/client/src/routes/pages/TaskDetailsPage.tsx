import { TaskDetails } from "@/components";

const TaskDetailsPage = () => {
  return (
    <div className="min-h-screen h-full">
      <h1 className="mb-10 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        Редактирование Задачи
      </h1>
      <TaskDetails />
    </div>
  );
};
export default TaskDetailsPage;
