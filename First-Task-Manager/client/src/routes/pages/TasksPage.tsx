import { TaskPagesContent } from "@/components";

const TasksPage = () => {
  //TODO: Добавить поиск + фильтрацию по статусу
  return (
    <div className="min-h-screen h-full">
      <h1 className="mb-10 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        Задачи
      </h1>
      <TaskPagesContent />
    </div>
  );
};
export default TasksPage;
