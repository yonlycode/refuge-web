import ApiErrors from './ApiErrors';
import ApiReturnErrorsTypes from './types/ApiReturnErrorsTypes';

export default class AwsError extends ApiErrors {
  constructor(props: Error) {
    super({
      ...props,
      name: ApiReturnErrorsTypes.AWS_ERROR,
      reference: props.message,
      statusCode: 500,
    });
  }
}
