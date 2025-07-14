import { useParams } from "react-router";
import { useGetTaskByIdQuery } from "../../api/taskApi";
import { Loader, QueryError, TaskDetails } from "../../components";

const TaskDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: task,
    isLoading,
    isFetching,
    error,
    refetch,
  } = useGetTaskByIdQuery(id ?? "");

  if (isLoading || isFetching) {
    return <Loader />;
  }
  if (error || !task) {
    return <QueryError error={error} onRetry={() => refetch()} />;
  }

  return (
    <div className="min-h-screen h-full">
      <h1 className="mb-10 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        Редактирование Задачи
      </h1>
      <TaskDetails task={task} id={id} />
    </div>
  );
};
export default TaskDetailsPage;
