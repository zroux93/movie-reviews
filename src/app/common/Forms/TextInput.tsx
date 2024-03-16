import { useId, forwardRef, InputHTMLAttributes } from 'react';

type TextInputProps = {
  label: string;
  placeholder?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'id'>;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      wrapperClassName,
      labelClassName,
      inputClassName,
      ...props
    }: TextInputProps,
    ref
  ) => {
    const id = useId();

    return (
      <div className={wrapperClassName || 'col-12'}>
        <label className={labelClassName || 'form-label'} htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          className={inputClassName || 'form-control'}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
