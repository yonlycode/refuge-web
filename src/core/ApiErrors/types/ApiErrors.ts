import ApiReturnErrorsTypes from './ApiReturnErrorsTypes';

export interface IApiErrors extends Error {
    reference?: string,
    statusCode: number,
    name: ApiReturnErrorsTypes
}

export type ApiErrorsProps = Omit<IApiErrors, 'name' | 'message' | 'statusCode'>;
