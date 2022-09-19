import ApiErrors from './ApiErrors';
import { ApiErrorsProps } from './types/ApiErrors';
import ApiReturnErrorsTypes from './types/ApiReturnErrorsTypes';

export default class MethodNotImplementedError extends ApiErrors {
  constructor(props: ApiErrorsProps) {
    super({
      ...props,
      name: ApiReturnErrorsTypes.METHOD_NOT_IMPLEMENTED,
      message: `HTTP Method ${props.reference} not implemented`,
      statusCode: 500,
    });
  }
}
