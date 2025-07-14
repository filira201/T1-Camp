import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
  Button,
} from "@heroui/react";
import { categoryColor, priorityColor, statusColor, type Task } from "../lib";
import type { FC } from "react";
import { useNavigate } from "react-router";
import { CiEdit } from "react-icons/ci";

type TaskItemProps = {
  task: Task;
};

const TaskItem: FC<TaskItemProps> = ({ task }) => {
  const navigate = useNavigate();

  return (
    <Card className="w-full min-h-64">
      <CardHeader>
        <h3 className="text-xl font-medium line-clamp-1" title={task.title}>
          {task.title}
        </h3>
      </CardHeader>

      <CardBody>
        {task.description && (
          <p
            className="text-lg text-default-500 line-clamp-2"
            title={task.description}
          >
            {task.description}
          </p>
        )}
      </CardBody>

      <CardFooter className="flex flex-col gap-4 items-start">
        <div className="flex gap-2 flex-wrap">
          <Chip color={categoryColor[task.category]}>{task.category}</Chip>
          <Chip color={statusColor[task.status]}>{task.status}</Chip>
          <Chip color={priorityColor[task.priority]}>{task.priority}</Chip>
        </div>

        <Button
          onPress={() => navigate(`/task/${task.id}`)}
          color="primary"
          size="md"
          variant="flat"
          endContent={<CiEdit />}
          fullWidth
        >
          Редактировать
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TaskItem;
