import { ErrorBoundary } from "@components";
import { TaskCreatePage, TaskDetailsPage, TasksPage } from "@routes/pages";

import AppLayout from "./AppLayout";

const RouterBuilder = () => {
  const generalRoutes = [
    {
      path: "/",
      element: <TasksPage />,
    },
    {
      path: "/task/:id",
      element: <TaskDetailsPage />,
    },
    {
      path: "/task/new",
      element: <TaskCreatePage />,
    },
  ];

  const routes = [
    {
      element: <AppLayout />,
      children: generalRoutes,
      errorElement: <ErrorBoundary />,
    },
  ];

  return routes;
};

export default RouterBuilder;
