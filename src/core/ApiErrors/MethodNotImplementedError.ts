import ApiErrors from './ApiErrors';
import { ApiErrorsProps } from './types/ApiErrors';
import ApiReturnErrors from './types/ApiReturnErrors';

export default class MethodNotImplementedError extends ApiErrors {
  constructor(props: ApiErrorsProps) {
    super({
      ...props,
      name: ApiReturnErrors.METHOD_NOT_IMPLEMENTED,
      message: `HTTP Method ${props.reference} not implemented`,
      statusCode: 500,
    });
  }
}
