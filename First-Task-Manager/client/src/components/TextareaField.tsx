import { Textarea } from "@heroui/react";
import { type Control, type FieldValues, type Path, useController } from "react-hook-form";

interface TextareaFieldProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T>;
  placeholder?: string;
  isRequired?: boolean;
}

const TextareaField = <T extends FieldValues>({
  name,
  label,
  control,
  placeholder,
  isRequired = false,
}: TextareaFieldProps<T>) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules: isRequired ? { required: `Поле ${label} обязательно` } : undefined,
  });

  return (
    <Textarea
      {...field}
      ref={field.ref}
      validationBehavior="aria"
      label={label}
      isInvalid={fieldState.invalid}
      errorMessage={fieldState.error?.message}
      placeholder={placeholder}
      isRequired={isRequired}
    />
  );
};
export default TextareaField;
