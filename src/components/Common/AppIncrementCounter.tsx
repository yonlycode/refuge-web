import {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes,
} from 'react';

export type AppIncrementCounterProps = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & {
        errorMessage?: string | null;
        min?: number;
        max?: number;
        onIncrement?: (value: number) => void;
        onDecrement?: (value: number) => void;
    }

export default function AppIncrementCounter(props: AppIncrementCounterProps) {
    const {
        className,
        errorMessage,
        min,
        max,
        name,
        onIncrement,
        onDecrement,
        value
    } = props;

    const mappedProps = { ...props };
    delete mappedProps.errorMessage;
    delete mappedProps.min;
    delete mappedProps.max;
    delete mappedProps.onIncrement;
    delete mappedProps.onDecrement;

    const handleDecrementValue = () => {
        if (onDecrement) {
            if (!value) {
                return onDecrement(min ?? 1)
            }

            const newValue = Number(value) - 1;
            return onDecrement( !min 
                ?  newValue 
                : newValue === min 
                    ? Number(value) 
                    : newValue 
            )
        }
    }

    const handleIncrementValue = () => {
        if(onIncrement) {
            if (!value) {
                return onIncrement(1)
            }
            const newValue = Number(value) + 1;
            return onIncrement(
                !min
                    ? newValue
                    : newValue === max
                        ? Number(value)
                        : newValue
            )
        }
    }

    const handleChangeValue = ({currentTarget}: ChangeEvent<HTMLInputElement>) => {
        const value = Number(currentTarget.value)
        if ((max && value < max) && (min && value > min)) {
            if(onIncrement) {
                onIncrement(value)
            } else if(onDecrement) {
                onDecrement(value)
            }
        }
    }

    const enhancedClassName = className
        ? `${className} ${errorMessage ? 'is-invalid' : ''}`
        : '';

    return <>
        <div 
            className="number input-increment-counter mt-2 ps-5 pe-5" 
            id={`input-increment-counter-${name}`}
        >
            <span 
                className="control bg-primary text-white" 
                onClick={handleDecrementValue}
            >-</span>
            <input 
                {...mappedProps} 
                className={enhancedClassName}
                onChange={handleChangeValue}
                type='text' 
            />
            <span 
                className="control bg-primary text-white" 
                onClick={handleIncrementValue}
            >+</span>
        </div>

        {errorMessage !== null && (
            <span
                className="invalid-feedback ms-2"
                id={`inputFeedback-${name}`}
            >
                {errorMessage}
            </span>
        )}
    </>
}