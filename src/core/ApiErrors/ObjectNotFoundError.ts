import ApiErrors from './ApiErrors';
import { ApiErrorsProps } from './types/ApiErrors';
import ApiReturnErrorsTypes from './types/ApiReturnErrorsTypes';

export default class ObjectNotFoundError extends ApiErrors {
  constructor(props: ApiErrorsProps) {
    super({
      ...props,
      name: ApiReturnErrorsTypes.OBJECT_NOT_FOUND,
      message: `Object ${props.reference} not found`,
      statusCode: 404,
    });
  }
}
