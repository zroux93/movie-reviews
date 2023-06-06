import { cloneElement, ReactNode, Children, ReactElement } from 'react';

type FormInputWithLabelProps = {
  id: string;
  label: string;
  placeholder?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  textArea?: boolean;
  children: ReactElement;
};

export default function FormInputWithLabel({
  id,
  label,
  wrapperClassName,
  labelClassName,
  inputClassName,
  placeholder,
  children,
}: FormInputWithLabelProps) {
  return (
    <div className={wrapperClassName || 'col-12'}>
      <label className={labelClassName || 'form-label'} htmlFor={id}>
        {label}
      </label>
      {cloneElement(children, {
        id: id,
        className: inputClassName || 'form-control',
        placeholder: placeholder,
      })}
    </div>
  );
}
