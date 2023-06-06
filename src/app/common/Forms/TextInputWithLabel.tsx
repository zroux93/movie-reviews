// type FormInputWithLabelProps = {
//   id: string;
//   label: string;
//   placeholder?: string;
//   wrapperClassName?: string;
//   labelClassName?: string;
//   inputClassName?: string;
//   textArea?: boolean;
// };

// export default function TextInputWithLabel({
//   id,
//   label,
//   wrapperClassName,
//   labelClassName,
//   inputClassName,
//   placeholder,
//   textArea,
// }: FormInputWithLabelProps) {
//   return (
//     <div className={wrapperClassName || 'col-12'}>
//       <label className={labelClassName || 'form-label'} htmlFor={id}>
//         {label}
//       </label>
//       {textArea ? (
//         <textarea
//           id={id}
//           className={inputClassName || 'form-control'}
//           placeholder={placeholder}
//         />
//       ) : (
//         <input
//           id={id}
//           className={inputClassName || 'form-control'}
//           placeholder={placeholder}
//         />
//       )}
//     </div>
//   );
// }
