import {
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react';

export type AppInputProps = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & {
        errorMessage?: string|null;
}

export default function AppInput(props: AppInputProps) {
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
      <input
        {...mappedProps}
        aria-describedby={`inputFeedback-${name}`}
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
