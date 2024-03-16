import { useId, forwardRef, InputHTMLAttributes } from 'react';

type TextAreaInputProps = {
  label: string;
  placeholder?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorMessage?: string;
} & Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'className' | 'id'>;

export const TextAreaInput = forwardRef<
  HTMLTextAreaElement,
  TextAreaInputProps
>(
  (
    {
      label,
      wrapperClassName,
      labelClassName,
      inputClassName,
      errorMessage,
      ...props
    }: TextAreaInputProps,
    ref
  ) => {
    const id = useId();

    return (
      <div className={wrapperClassName || 'col-12'}>
        <label className={labelClassName || 'form-label'} htmlFor={id}>
          {label}
        </label>
        <textarea
          id={id}
          className={inputClassName || 'form-control'}
          ref={ref}
          {...props}
        />
        {errorMessage ? <div>{errorMessage}</div> : null}
      </div>
    );
  }
);
