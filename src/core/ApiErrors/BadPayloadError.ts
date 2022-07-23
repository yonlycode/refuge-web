import ApiErrors from './ApiErrors';
import { ApiErrorsProps } from './types/ApiErrors';
import ApiReturnErrors from './types/ApiReturnErrors';

export default class BadPayloadError extends ApiErrors {
  constructor(props: ApiErrorsProps) {
    super({
      ...props,
      name: ApiReturnErrors.BAD_PAYLOAD,
      message: props.reference,
      statusCode: 400,
    });
  }
}
