import clsx from 'clsx';

type LoadingProps = {
  text?: string;
  spinnerClassName?: string;
  inlineText?: boolean;
};

export default function Loading({
  text,
  spinnerClassName,
  inlineText,
}: LoadingProps) {
  return (
    <div className={clsx(inlineText && 'text-center')}>
      <div className={clsx('spinner-border', spinnerClassName)} role="status">
        <span className="sr-only visually-hidden">{text || 'Loading...'}</span>
      </div>
      {text && <span className="m-2">{text}</span>}
    </div>
  );
}
