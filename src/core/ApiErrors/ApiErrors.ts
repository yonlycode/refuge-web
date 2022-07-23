import { IApiErrors } from './types/ApiErrors';
import ApiReturnErrors from './types/ApiReturnErrors';

export default abstract class ApiErrors extends Error {
  private _statusCode: number;

  private _reference: string;

  constructor({
    reference, statusCode, message, name,
  }:IApiErrors) {
    super(message);
    this.name = name;
    this._statusCode = statusCode;
    this._reference = reference;
  }

  get errorDetail(): IApiErrors {
    return {
      name: this.name as ApiReturnErrors,
      statusCode: this.statusCode,
      reference: this.reference,
      message: this.message,
    };
  }

  get reference() {
    return this._reference;
  }

  set reference(reference: string) {
    this._reference = reference;
  }

  get statusCode() {
    return this._statusCode;
  }

  set statusCode(statusCode: number) {
    this._statusCode = statusCode;
  }
}
