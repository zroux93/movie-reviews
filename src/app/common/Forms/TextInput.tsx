import { type InputHTMLAttributes, useId } from 'react';
import { type RegisterOptions, useFormContext } from 'react-hook-form';

type TextInputProps = {
  name: string;
  label: string;
  placeholder?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  registerOptions?: RegisterOptions;
  isRequired?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'id'>;

const TextInput = ({
  name,
  label,
  wrapperClassName,
  labelClassName,
  inputClassName,
  registerOptions,
  isRequired,
  ...props
}: TextInputProps) => {
  const id = useId();

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors?.[name]?.message?.toString();

  const internalRegisterOptions: RegisterOptions = {
    ...(isRequired && { required: `${label} is required` }),
    ...registerOptions,
  };

  return (
    <div className={wrapperClassName || 'col-12'}>
      <label className={labelClassName || 'form-label'} htmlFor={id}>
        {label}
      </label>
      <input
        {...register(name, internalRegisterOptions)}
        id={id}
        className={inputClassName || 'form-control'}
        {...props}
      />

      {errorMessage ? (
        <small className="text-danger" aria-describedby={id}>
          {errorMessage}
        </small>
      ) : null}
    </div>
  );
};

export { TextInput };
