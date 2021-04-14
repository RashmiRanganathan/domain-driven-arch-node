import { ERROR_CODE, ErrorList } from '../common/errors';

export interface ErrorDetails {
  message: string;
  key: string;
  code: string;
}

export class AppError extends Error {
  public errorCode: ERROR_CODE;
  errors?: ErrorDetails[];
  constructor(errorCode: ERROR_CODE, errors?: ErrorDetails[]) {
    super(errorCode);
    this.errorCode = errorCode;
    this.name = AppError.name;
    this.errors = errors;
  }

  getErrors() {
    const error = ErrorList[this.errorCode];
    return {
      errors: this.errors,
      statusCode: error.statusCode,
      message: error.message
    };
  }
}

export const createErrorDetail = (
  key: string,
  errorCode: ERROR_CODE
): ErrorDetails => {
  return {
    key,
    code: errorCode,
    message: ErrorList[errorCode].message
  };
};
