import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

export type AppTextareaProps = DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
    & {
        errorMessage?: string | null;
    }

export default function AppTextarea(props: AppTextareaProps) {
  const {
    className,
    errorMessage,
    name,
  } = props;

  const mappedProps = { ...props };
  delete mappedProps.errorMessage;

  const enhancedClassName = className
    ? `${className} ${errorMessage ? 'is-invalid' : ''}`
    : '';

  return (
    <>
      <textarea
        {...mappedProps}
        className={enhancedClassName}
      />
      {errorMessage !== null && (
      <span
        className="invalid-feedback ms-2"
        id={`inputFeedback-${name}`}
      >
        {errorMessage}
      </span>
      )}
    </>
  );
}
