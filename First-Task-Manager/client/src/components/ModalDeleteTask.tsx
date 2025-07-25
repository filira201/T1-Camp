import {
  addToast,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";

import { useDeleteTaskMutation } from "@/api";

interface ModalDeleteTaskProps {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
  taskId: string;
}

const ModalDeleteTask = ({
  isOpen,
  onOpenChange,
  onClose,
  taskId,
}: ModalDeleteTaskProps) => {
  const [deleteTask] = useDeleteTaskMutation();

  const handleDeleteTask = async () => {
    try {
      await deleteTask(taskId).unwrap();
      onClose();
      addToast({
        title: "Задача",
        description: "Вы удалили задачу",
        color: "success",
      });
    } catch (error) {
      console.error(error);
      addToast({
        title: "Задача",
        description: "Произошла ошибка при удалении задачи",
        color: "danger",
      });
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h3 className="text-xl font-medium">Удалить задачу?</h3>
              </ModalHeader>
              <ModalBody>
                <p>
                  Вы уверены, что хотите удалить эту задачу? Это действие
                  необратимо.
                </p>
              </ModalBody>
              <ModalFooter>
                <div className="w-full grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2 sm:gap-6">
                  <Button
                    color="default"
                    variant="flat"
                    onPress={onClose}
                    fullWidth
                    className="text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                  >
                    Отмена
                  </Button>
                  <Button
                    color="danger"
                    variant="flat"
                    onPress={handleDeleteTask}
                    className="text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                  >
                    Удалить
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalDeleteTask;
