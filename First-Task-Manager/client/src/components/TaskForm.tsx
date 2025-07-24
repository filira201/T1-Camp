import { Button, Form, Input, Textarea } from "@heroui/react";
import { Controller, useForm } from "react-hook-form";

import { type Task,TASK_CATEGORY, TASK_PRIORITY, TASK_STATUS } from "@/lib";

import { ErrorMessage, SelectField } from ".";

interface TaskFormProps {
  initialValues?: Partial<Task>;
  onSubmit: (data: Task) => void | Promise<void>;
  isLoading?: boolean;
  submitText: string;
  cancelText?: string;
  onCancel?: () => void;
}

const TaskForm = ({
  initialValues,
  onSubmit,
  isLoading,
  submitText,
  cancelText = "Отмена",
  onCancel,
}: TaskFormProps) => {
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<Task>({
    defaultValues: {
      title: initialValues?.title ?? "",
      description: initialValues?.description ?? "",
      category: initialValues?.category ?? TASK_CATEGORY[0],
      status: initialValues?.status ?? TASK_STATUS[0],
      priority: initialValues?.priority ?? TASK_PRIORITY[0],
    },
  });

  const handleFormSubmit = async (data: Task) => {
    try {
      await onSubmit(data);
    } catch {
      setError("root", {
        message: "Что-то пошло не так, попробуйте снова",
      });
    }
  };

  return (
    <Form
      className="mx-auto w-full flex flex-col gap-4 border-1.5 border-foreground-500 py-8 px-5 rounded-2xl sm:w-4/5 sm:max-w-3xl"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Controller
        control={control}
        name="title"
        render={({ field, fieldState }) => (
          <Input
            {...field}
            ref={field.ref}
            isRequired
            errorMessage={fieldState.error?.message}
            validationBehavior="aria"
            isInvalid={fieldState.invalid}
            label="Заголовок"
            placeholder="Введите заголовок"
          />
        )}
        rules={{ required: "Заголовок обязателен" }}
      />

      <Controller
        control={control}
        name="description"
        render={({ field }) => (
          <Textarea
            {...field}
            ref={field.ref}
            validationBehavior="aria"
            label="Описание"
            placeholder="Введите описание"
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
          type="button"
          variant="flat"
          color="danger"
          onPress={onCancel}
          fullWidth
        >
          {cancelText}
        </Button>
        <Button type="submit" color="primary" fullWidth isLoading={isLoading}>
          {submitText}
        </Button>
      </div>
    </Form>
  );
};

export default TaskForm;
