enum ERROR_CODE {
  UNEXPECTED_ERROR = 'UNEXPECTED_ERROR', // do not use this when create AppError
  INCORRECT_FIELD = 'INCORRECT_FIELD',
  INVALID_REGISTER_PARAMETER = 'INVALID_REGISTER_PARAMETER',
  RESOURCE_NOT_FOUND = 'RESOURCE_NOT_FOUND',
  ACCOUNT_NOT_IN_CONTACT = 'ACCOUNT_NOT_IN_CONTACT',
  INVALID_REQUEST = 'INVALID_REQUEST',
  INVALID_MANDATORY_FIELDS = 'INVALID_MANDATORY_FIELDS',
  CONTACT_NOT_FOUND = 'CONTACT_NOT_FOUND'
}

const JoiValidationErrors = {
  required: ERROR_CODE.INVALID_MANDATORY_FIELDS,
  empty: ERROR_CODE.INVALID_MANDATORY_FIELDS,
  invalid: ERROR_CODE.INVALID_MANDATORY_FIELDS // TODO: use other method if invalid other than null, ""
};

enum StatusCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  MOVED_PERMANENTLY = 301,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  REQUEST_TIMEOUT = 408,
  GONE = 410,
  PAYLOAD_TOO_LARGE = 413,
  UNSUPPORTED_MEDIA_TYPE = 415,
  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503
}

const ErrorList = {
  [ERROR_CODE.UNEXPECTED_ERROR]: {
    statusCode: StatusCode.INTERNAL_SERVER_ERROR,
    message: 'We caught unexpected error'
  },
  [ERROR_CODE.INCORRECT_FIELD]: {
    statusCode: StatusCode.BAD_REQUEST,
    message: 'Incorrect field value, data type or length'
  },
  [ERROR_CODE.INVALID_REQUEST]: {
    statusCode: StatusCode.BAD_REQUEST,
    message: 'Invalid request'
  },
  [ERROR_CODE.INVALID_REGISTER_PARAMETER]: {
    statusCode: StatusCode.BAD_REQUEST,
    message: 'The parameter setting is invalid'
  },
  [ERROR_CODE.RESOURCE_NOT_FOUND]: {
    statusCode: StatusCode.NOT_FOUND,
    message: 'Resource not found'
  },
  [ERROR_CODE.ACCOUNT_NOT_IN_CONTACT]: {
    statusCode: StatusCode.BAD_REQUEST,
    message: 'Account not found in the contact'
  },
  [ERROR_CODE.INVALID_MANDATORY_FIELDS]: {
    statusCode: StatusCode.BAD_REQUEST,
    message: 'Required field cannot be empty'
  },
  [ERROR_CODE.CONTACT_NOT_FOUND]: {
    statusCode: StatusCode.BAD_REQUEST,
    message: 'Contact id not found'
  }
};

export { ERROR_CODE, StatusCode, ErrorList, JoiValidationErrors };
