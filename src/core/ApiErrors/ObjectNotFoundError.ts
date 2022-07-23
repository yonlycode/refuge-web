import ApiErrors from './ApiErrors';
import { ApiErrorsProps } from './types/ApiErrors';
import ApiReturnErrors from './types/ApiReturnErrors';

export default class ObjectNotFoundError extends ApiErrors {
  constructor(props: ApiErrorsProps) {
    super({
      ...props,
      name: ApiReturnErrors.OBJECT_NOT_FOUND,
      message: `HTTP Method ${props.reference} not implemented`,
      statusCode: 404,
    });
  }
}
