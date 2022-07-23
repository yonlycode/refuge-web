import ApiReturnErrors from './ApiReturnErrors';

export interface IApiErrors extends Error {
    reference: string,
    statusCode: number,
    name: ApiReturnErrors
}

export type ApiErrorsProps = Omit<IApiErrors, 'name' | 'message' | 'statusCode'>;
