import { IApiErrors } from './types/ApiErrors';
import ApiReturnErrorsTypes from './types/ApiReturnErrorsTypes';

export default abstract class ApiErrors extends Error {
  private _statusCode: number;

  private _reference: string;

  constructor({
    reference, statusCode, message, name,
  }:IApiErrors) {
    super(message);
    this.name = name;
    this._statusCode = statusCode;
    this._reference = reference ?? '';
  }

  get errorDetail(): IApiErrors {
    return {
      name: this.name as ApiReturnErrorsTypes,
      statusCode: this.statusCode,
      reference: this.reference,
      message: this.message,
    };
  }

  get reference() {
    return this._reference;
  }

  get statusCode() {
    return this._statusCode;
  }
}
