import {
  BadRequestError,
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
  GatewayTimeoutError,
  JsonApiError
} from '../src/';

describe('errors', () => {
  describe('BadRequestError', () => {
    it('throw NotFoundError', () => {
      expect(() => {
        throw new BadRequestError('Request is invalid.');
      }).toThrow(BadRequestError);
    });
  });
  describe('UnauthorizedError', () => {
    it('throw UnauthorizedError', () => {
      expect(() => {
        throw new UnauthorizedError('Unauthorized');
      }).toThrow(UnauthorizedError);
    });
  });
  describe('ForbiddenError', () => {
    it('throw ForbiddenError', () => {
      expect(() => {
        throw new ForbiddenError('Forbidden');
      }).toThrow(ForbiddenError);
    });
  });
  describe('NotFoundError', () => {
    it('throw NotFoundError', () => {
      expect(() => {
        throw new NotFoundError('Record was not found');
      }).toThrow(NotFoundError);
    });
  });
  describe('MethodNotAllowedError', () => {
    it('throw MethodNotAllowedError', () => {
      expect(() => {
        throw new MethodNotAllowedError('Method GET does not allowed');
      }).toThrow(MethodNotAllowedError);
    });
  });
  describe('NotAcceptableError', () => {
    it('throw NotAcceptableError', () => {
      expect(() => {
        throw new NotAcceptableError('Unacceptable');
      }).toThrow(NotAcceptableError);
    });
  });
  describe('RequestTimeoutError', () => {
    it('throw RequestTimeoutError', () => {
      expect(() => {
        throw new RequestTimeoutError('Request timeout');
      }).toThrow(RequestTimeoutError);
    });
  });
  describe('UnsupportedMediaTypeError', () => {
    it('throw UnsupportedMediaTypeError', () => {
      expect(() => {
        throw new UnsupportedMediaTypeError('Content-type: application/json does not supported');
      }).toThrow(UnsupportedMediaTypeError);
    });
  });
  describe('InternalError', () => {
    it('throw InternalError', () => {
      expect(() => {
        throw new InternalError('Internal Server Error.');
      }).toThrow(InternalError);
    });
  });
  describe('NotImplementedError', () => {
    it('throw NotImplementedError', () => {
      expect(() => {
        throw new NotImplementedError('Not Implemented');
      }).toThrow(NotImplementedError);
    });
  });
  describe('ServiceUnavailableError', () => {
    it('throw ServiceUnavailableError', () => {
      expect(() => {
        throw new ServiceUnavailableError('Service is unavailable');
      }).toThrow(ServiceUnavailableError);
    });
  });
  describe('GatewayTimeoutError', () => {
    it('throw GatewayTimeoutError', () => {
      expect(() => {
        throw new GatewayTimeoutError('Gateway timeout');
      }).toThrow(GatewayTimeoutError);
    });
  });
  describe('JSonApiError', () => {
    it('throw customized JsonApiError', () => {
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
