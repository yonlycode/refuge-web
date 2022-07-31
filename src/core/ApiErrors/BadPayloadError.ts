import ApiErrors from './ApiErrors';
import { ApiErrorsProps } from './types/ApiErrors';
import ApiReturnErrorsTypes from './types/ApiReturnErrorsTypes';

export default class BadPayloadError extends ApiErrors {
  constructor(props: ApiErrorsProps) {
    super({
      ...props,
      name: ApiReturnErrorsTypes.BAD_PAYLOAD,
      message: props.reference ?? '',
      statusCode: 400,
    });
  }
}
