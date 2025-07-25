import { Select, SelectItem } from "@heroui/react";
import {
  type Control,
  type FieldValues,
  type Path,
  useController,
} from "react-hook-form";

interface SelectFieldProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T>;
  options: readonly string[];
  description?: string;
  isRequired?: boolean;
}

const SelectField = <T extends FieldValues>({
  name,
  label,
  control,
  options,
  description,
  isRequired = true,
}: SelectFieldProps<T>) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules: isRequired ? { required: `Поле ${label} обязательно` } : undefined,
  });

  return (
    <Select
      ref={field.ref}
      label={label}
      description={description}
      isRequired={isRequired}
      name={name}
      isInvalid={fieldState.invalid}
      errorMessage={fieldState.error?.message}
      validationBehavior="aria"
      selectedKeys={[field.value]}
      onBlur={field.onBlur}
      onChange={field.onChange}
      onSelectionChange={(keys) => {
        field.onChange(Array.from(keys)[0]);
      }}
    >
      {options.map((option) => (
        <SelectItem key={option}>{option}</SelectItem>
      ))}
    </Select>
  );
};

export default SelectField;
