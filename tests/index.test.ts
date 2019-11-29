import {
  default as JsonApiError,
  BadRequestError,
  MalformedError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  MethodNotAllowedError,
  NotAcceptableError,
  RequestTimeoutError,
  UnsupportedMediaTypeError,
  InternalError,
  NotImplementedError,
  ServiceUnavailableError,
  GatewayTimeoutError
} from '../src/';

describe('errors', () => {
  describe('BadRequestError', () => {
    it('throw BadRequestError', () => {
      expect(() => {
        throw new BadRequestError('Request is invalid.');
      }).toThrow(BadRequestError);
    });

    it('throw BadRequestError with options', () => {
      expect(() => {
        throw new BadRequestError({
          detail: 'Request is invalid'
        });
      }).toThrow(BadRequestError);
    });
  });

  describe('UnauthorizedError', () => {
    it('throw UnauthorizedError', () => {
      expect(() => {
        throw new UnauthorizedError('Unauthorized');
      }).toThrow(UnauthorizedError);
    });

    it('throw UnauthorizedError with options', () => {
      expect(() => {
        throw new UnauthorizedError({
          detail: 'Unauthorized'
        });
      }).toThrow(UnauthorizedError);
    });
  });

  describe('MalformedError', () => {
    it('throw MalformedError', () => {
      expect(() => {
        throw new MalformedError('Error in reading malformed JSON');
      }).toThrow(MalformedError);
    });

    it('throw UnauthorizedError with options', () => {
      expect(() => {
        throw new MalformedError({
          detail: 'Error in reading malformed JSON'
        });
      }).toThrow(MalformedError);
    });
  });


  describe('ForbiddenError', () => {
    it('throw ForbiddenError', () => {
      expect(() => {
        throw new ForbiddenError('Forbidden');
      }).toThrow(ForbiddenError);
    });

    it('throw ForbiddenError with options', () => {
      expect(() => {
        throw new ForbiddenError({
          detail: 'Forbidden'
        });
      }).toThrow(ForbiddenError);
    });
  });

  describe('NotFoundError', () => {
    it('throw NotFoundError', () => {
      expect(() => {
        throw new NotFoundError('Record was not found');
      }).toThrow(NotFoundError);
    });

    it('throw NotFoundError with options', () => {
      expect(() => {
        throw new NotFoundError({
          detail: 'Record was not found'
        });
      }).toThrow(NotFoundError);
    });
  });

  describe('MethodNotAllowedError', () => {
    it('throw MethodNotAllowedError', () => {
      expect(() => {
        throw new MethodNotAllowedError('Method GET does not allowed');
      }).toThrow(MethodNotAllowedError);
    });

    it('throw MethodNotAllowedError with options', () => {
      expect(() => {
        throw new MethodNotAllowedError({
          detail: 'Method GET does not allowed'
        });
      }).toThrow(MethodNotAllowedError);
    });
  });

  describe('NotAcceptableError', () => {
    it('throw NotAcceptableError', () => {
      expect(() => {
        throw new NotAcceptableError('Unacceptable');
      }).toThrow(NotAcceptableError);
    });

    it('throw NotAcceptableError with options', () => {
      expect(() => {
        throw new NotAcceptableError({
          detail: 'Unacceptable'
        });
      }).toThrow(NotAcceptableError);
    });
  });

  describe('RequestTimeoutError', () => {
    it('throw RequestTimeoutError', () => {
      expect(() => {
        throw new RequestTimeoutError('Request timeout');
      }).toThrow(RequestTimeoutError);
    });

    it('throw RequestTimeoutError with options', () => {
      expect(() => {
        throw new RequestTimeoutError({
          detail: 'Request timeout'
        });
      }).toThrow(RequestTimeoutError);
    });
  });

  describe('UnsupportedMediaTypeError', () => {
    it('throw UnsupportedMediaTypeError', () => {
      expect(() => {
        throw new UnsupportedMediaTypeError('Content-type: application/json does not supported');
      }).toThrow(UnsupportedMediaTypeError);
    });

    it('throw UnsupportedMediaTypeError with options', () => {
      expect(() => {
        throw new UnsupportedMediaTypeError({
          detail: 'Content-type: application/json does not supported'
        });
      }).toThrow(UnsupportedMediaTypeError);
    });
  });

  describe('InternalError', () => {
    it('throw InternalError', () => {
      expect(() => {
        throw new InternalError('Internal Server Error.');
      }).toThrow(InternalError);
    });

    it('throw InternalError with options', () => {
      expect(() => {
        throw new InternalError({
          detail: 'Internal Server Error.'
        });
      }).toThrow(InternalError);
    });
  });

  describe('NotImplementedError', () => {
    it('throw NotImplementedError', () => {
      expect(() => {
        throw new NotImplementedError('Not Implemented');
      }).toThrow(NotImplementedError);
    });

    it('throw NotImplementedError with options', () => {
      expect(() => {
        throw new NotImplementedError({
          detail: 'Not Implemented'
        });
      }).toThrow(NotImplementedError);
    });
  });

  describe('ServiceUnavailableError', () => {
    it('throw ServiceUnavailableError', () => {
      expect(() => {
        throw new ServiceUnavailableError('Service is unavailable');
      }).toThrow(ServiceUnavailableError);
    });

    it('throw ServiceUnavailableError with options', () => {
      expect(() => {
        throw new ServiceUnavailableError({
          detail: 'Service is unavailable'
        });
      }).toThrow(ServiceUnavailableError);
    });
  });

  describe('GatewayTimeoutError', () => {
    it('throw GatewayTimeoutError', () => {
      expect(() => {
        throw new GatewayTimeoutError('Gateway timeout');
      }).toThrow(GatewayTimeoutError);
    });

    it('throw GatewayTimeoutError with options', () => {
      expect(() => {
        throw new GatewayTimeoutError({
          detail: 'Gateway timeout'
        });
      }).toThrow(GatewayTimeoutError);
    });
  });

  describe('JSonApiError', () => {
    it('should throw customized JsonApiError if JsonApiError option is valid', () => {
      expect(() => {
        throw new JsonApiError({
          id: 'RequestEntityTooLargeError',
          status: '413',
          code: 'RequestEntityTooLargeError',
          title: 'RequestEntityTooLargeError',
          detail: 'Request Entity Too Large'
        });
      }).toThrow(JsonApiError);
    });

    it('throw error if JsonApiError options is invalid ', () => {
      expect(() => {
        throw new JsonApiError(33333);
      }).toThrow(TypeError);
    });

    it('toJSON', () => {
      const func = () => {
        throw new JsonApiError({
          id: 'RequestEntityTooLargeError',
          status: '413',
          code: 'RequestEntityTooLargeError',
          title: 'RequestEntityTooLargeError',
          detail: 'Request Entity Too Large'
        });
      };

      let error;

      try {
        func();
      } catch (e) {
        error = e;
      }

      const jsonError = error.toJSON();

      expect(error).toBeInstanceOf(JsonApiError);

      expect(jsonError).toHaveProperty('id', 'RequestEntityTooLargeError');
      expect(jsonError).toHaveProperty('status', '413');
      expect(jsonError).toHaveProperty('code', 'RequestEntityTooLargeError');
      expect(jsonError).toHaveProperty('title', 'RequestEntityTooLargeError');
      expect(jsonError).toHaveProperty('detail', 'Request Entity Too Large');
    });
  });
});
