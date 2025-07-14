import { ErrorBoundary } from "../components";
import AppLayout from "./AppLayout";
import { TaskDetailsPage, TasksPage } from "./pages";

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
