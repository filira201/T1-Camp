import { Loader, QueryError, TaskItem } from ".";
import { useGetAllTasksQuery } from "@/api";

const TaskList = () => {
  const {
    data: tasks,
    isFetching,
    isLoading,
    error,
    refetch,
  } = useGetAllTasksQuery();

  if (isLoading || isFetching) return <Loader />;

  if (error) {
    return <QueryError error={error} onRetry={() => refetch()} />;
  }
  if (!tasks || !tasks.length) {
    return (
      <h2 className="text-xl font-medium text-center">
        У вас пока что нет задач
      </h2>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};
export default TaskList;
