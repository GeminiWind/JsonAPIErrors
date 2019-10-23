import JsonApiError from './JsonApiError';
export class BadRequestError extends JsonApiError {
  static id = 'BadRequestError';
  static status = '400';
  static code = 'BadRequestError';
  static title = 'BadRequestError';
  static detail = '[BadRequestError] - BadRequestError';
}

export class UnauthorizedError extends JsonApiError {
  static id = 'UnauthorizedError';
  static status = '401';
  static code = 'UnauthorizedError';
  static title = 'UnauthorizedError';
  static detail = '[UnauthorizedError] - UnauthorizedError';
}

export class ForbiddenError extends JsonApiError {
  static id = 'ForbiddenError';
  static status = '403';
  static code = 'ForbiddenError';
  static title = 'ForbiddenError';
  static detail = '[ForbiddenError] - ForbiddenError';
}

export class NotFoundError extends JsonApiError {
  static id = 'NotFoundError';
  static status = '404';
  static code = 'NotFoundError';
  static title = 'NotFoundError';
  static detail = '[NotFoundError] - NotFoundError';
}

export class MethodNotAllowedError extends JsonApiError {
  static id = 'MethodNotAllowedError';
  static status = '405';
  static code = 'MethodNotAllowedError';
  static title = 'MethodNotAllowedError';
  static detail = '[MethodNotAllowedError] - MethodNotAllowedError';
}

export class NotAcceptableError extends JsonApiError {
  static id = 'NotAcceptableError';
  static status = '406';
  static code = 'NotAcceptableError';
  static title = 'NotAcceptableError';
  static detail = '[NotAcceptableError] - NotAcceptableError';
}

export class RequestTimeoutError extends JsonApiError {
  static id = 'RequestTimeoutError';
  static status = '408';
  static code = 'RequestTimeoutError';
  static title = 'RequestTimeoutError';
  static detail = '[RequestTimeoutError] - RequestTimeoutError';
}

export class UnsupportedMediaTypeError extends JsonApiError {
  static id = 'UnsupportedMediaTypeError';
  static status = '415';
  static code = 'UnsupportedMediaTypeError';
  static title = 'UnsupportedMediaTypeError';
  static detail = '[UnsupportedMediaTypeError] - UnsupportedMediaTypeError';
}

export class InternalError extends JsonApiError {
  static id = 'InternalError';
  static status = '500';
  static code = 'InternalError';
  static title = 'InternalError';
  static detail = '[InternalError] - InternalError';
}

export class NotImplementedError extends JsonApiError {
  static id = 'NotImplementedError';
  static status = '501';
  static code = 'NotImplementedError';
  static title = 'NotImplementedError';
  static detail = '[NotImplementedError] - NotImplementedError';
}

export class BadGatewayError extends JsonApiError {
  static id = 'BadGatewayError';
  static status = '502';
  static code = 'BadGatewayError';
  static title = 'BadGatewayError';
  static detail = '[BadGatewayError] - BadGatewayError';
}

export class ServiceUnavailableError extends JsonApiError {
  static id = 'ServiceUnavailableError';
  static status = '503';
  static code = 'ServiceUnavailableError';
  static title = 'ServiceUnavailableError';
  static detail = '[ServiceUnavailableError] - ServiceUnavailableError';
}

export class GatewayTimeoutError extends JsonApiError {
  static id = 'GatewayTimeoutError';
  static status = '504';
  static code = 'GatewayTimeoutError';
  static title = 'GatewayTimeoutError';
  static detail = '[GatewayTimeoutError] - GatewayTimeoutError';
}

export default JsonApiError;
