import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
  Button,
  useDisclosure,
} from "@heroui/react";
import {
  categoryColor,
  formatToClientDate,
  priorityColor,
  statusColor,
  type Task,
} from "../lib";
import { useNavigate } from "react-router";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { ModalDeleteTask } from "@components";

type TaskItemProps = {
  task: Task;
};

const TaskItem = ({ task }: TaskItemProps) => {
  const navigate = useNavigate();
  const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card className="w-full min-h-64">
        <CardHeader>
          <div className="w-full flex justify-between gap-1 items-center">
            <h3 className="text-xl font-medium line-clamp-1" title={task.title}>
              {task.title}
            </h3>
            <Button
              isIconOnly
              aria-label="Удалить задачу"
              color="danger"
              variant="flat"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-danger"
              onPress={onOpen}
            >
              <RiDeleteBinLine />
            </Button>
          </div>
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

          <p className="font-base text-default-600 text-lg">
            Создана: {formatToClientDate(task.createdAt)}
          </p>

          <Button
            onPress={() => navigate(`/task/${task.id}`)}
            color="primary"
            size="md"
            variant="flat"
            endContent={<CiEdit />}
            fullWidth
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
          >
            Редактировать
          </Button>
        </CardFooter>
      </Card>
      <ModalDeleteTask
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
        taskId={task.id}
      />
    </>
  );
};

export default TaskItem;
