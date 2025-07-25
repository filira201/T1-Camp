import { Input } from "@heroui/react";
import {
  type Control,
  type FieldValues,
  type Path,
  useController,
} from "react-hook-form";

interface InputFieldProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T>;
  placeholder?: string;
  isRequired?: boolean;
}

const InputField = <T extends FieldValues>({
  name,
  label,
  control,
  placeholder,
  isRequired = true,
}: InputFieldProps<T>) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules: isRequired ? { required: `Поле ${label} обязательно` } : undefined,
  });

  return (
    <Input
      {...field}
      ref={field.ref}
      isRequired={isRequired}
      errorMessage={fieldState.error?.message}
      validationBehavior="aria"
      isInvalid={fieldState.invalid}
      label={label}
      placeholder={placeholder}
    />
  );
};
export default InputField;
