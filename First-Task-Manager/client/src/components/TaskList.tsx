import { Loader, QueryError, TaskItem } from ".";
import { useGetAllTasksQuery } from "../api/taskApi";

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
    return <p>НИ ОДНОЙ ЗАДАЧИ</p>;
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
