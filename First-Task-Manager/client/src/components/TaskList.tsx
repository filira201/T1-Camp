import { Pagination } from "@heroui/react";
import { useEffect, useState } from "react";

import { useGetAllTasksQuery } from "@/api";
import { ITEMS_PER_PAGE } from "@/lib";

import { Loader, QueryError, TaskItem } from ".";

const TaskList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isFetching, isLoading, error, refetch } = useGetAllTasksQuery({
    page: currentPage,
    perPage: ITEMS_PER_PAGE,
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  if (isLoading || isFetching) return <Loader />;

  if (error) {
    return <QueryError error={error} onRetry={() => refetch()} />;
  }
  if (!data || !data.data || !data.data.length) {
    return (
      <h2 className="text-xl font-medium text-center">
        У вас пока что нет задач
      </h2>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {data.data.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Pagination
          size="lg"
          page={currentPage}
          total={data.pages}
          onChange={setCurrentPage}
          siblings={2}
          boundaries={2}
          showControls
          isCompact
        />
      </div>
    </>
  );
};
export default TaskList;
