import { addToast, Button, Form, Input, Textarea } from "@heroui/react";
import type { FC } from "react";
import { TASK_CATEGORY, TASK_PRIORITY, TASK_STATUS, type Task } from "../lib";
import { Controller, useForm } from "react-hook-form";
import SelectField from "./SelectField";
import { useNavigate } from "react-router";
import { useUpdateTaskMutation } from "../api/taskApi";
import ErrorMessage from "./ErrorMessage";

interface TaskDetailsProps {
  task: Task;
  id: string | undefined;
}

const TaskDetails: FC<TaskDetailsProps> = ({ task, id }) => {
  const navigate = useNavigate();
  const [updateTask, { isLoading }] = useUpdateTaskMutation();
  const {
    handleSubmit,
    setError,
    control,
    formState: { errors },
  } = useForm<Task>({
    defaultValues: {
      title: task.title,
      description: task.description ?? "",
      category: task.category,
      status: task.status,
      priority: task.priority,
    },
  });

  const onSubmit = async (taskData: Task) => {
    if (id) {
      try {
        //TODO: Отправлять только данные, которые были изменены
        await updateTask({ taskData, id }).unwrap();
        navigate(-1);
        addToast({
          title: "Задача",
          description: "Вы обновили задачу",
          color: "success",
        });
      } catch (error) {
        console.error(error);
        setError("root", {
          message: "Попробуйте позже",
        });
      }
    }
  };

  return (
    <Form
      className="mx-auto w-full flex flex-col gap-4 border-1.5 border-foreground-500 py-8 px-5 rounded-2xl sm:w-4/5 sm:max-w-3xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        control={control}
        name="title"
        render={({
          field: { name, value, onChange, onBlur, ref },
          fieldState: { invalid, error },
        }) => (
          <Input
            ref={ref}
            isRequired
            errorMessage={error?.message}
            validationBehavior="aria"
            isInvalid={invalid}
            label="Заголовок"
            name={name}
            placeholder="Введите заголовок"
            value={value}
            onBlur={onBlur}
            onChange={onChange}
          />
        )}
        rules={{ required: "Заголовок обязателен" }}
      />
      <Controller
        control={control}
        name="description"
        render={({ field: { name, value, onChange, onBlur, ref } }) => (
          <Textarea
            ref={ref}
            validationBehavior="aria"
            label="Описание"
            name={name}
            placeholder="Введите описание"
            value={value}
            onBlur={onBlur}
            onChange={onChange}
          />
        )}
      />
      <SelectField
        control={control}
        name="category"
        label="Категория"
        description="Выберите категорию"
        options={TASK_CATEGORY}
      />
      <SelectField
        control={control}
        name="status"
        label="Статус"
        description="Выберите статус"
        options={TASK_STATUS}
      />
      <SelectField
        control={control}
        name="priority"
        label="Приоритет"
        description="Выберите приоритет"
        options={TASK_PRIORITY}
      />
      <ErrorMessage error={errors.root?.message} />
      <div className="w-full grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2 sm:gap-6">
        <Button
          className="text-base"
          type="submit"
          color="primary"
          fullWidth
          isLoading={isLoading}
        >
          Сохранить
        </Button>
        <Button
          className="text-base"
          type="button"
          variant="flat"
          color="danger"
          onPress={() => navigate(-1)}
          fullWidth
        >
          Отмена
        </Button>
      </div>
    </Form>
  );
};
export default TaskDetails;
