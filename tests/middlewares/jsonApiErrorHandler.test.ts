import { jsonApiErrorHandler } from '../../src/middlewares';
import { NotFoundError, BadRequestError, AggregateJsonApiError } from '../../src';

describe('jsonApiErrorHandler', () => {
  it('should return response in the JSON API Error format if error is instance of JsonApiError', () => {
    const err = new NotFoundError('Resource was not found');

    const res = {
      send:  jest.fn().mockImplementation(function () { return this; }),
      status: jest.fn().mockImplementation(function () { return this; })
    };

    const next = jest.fn();

    jsonApiErrorHandler(err, undefined, res, next);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({
      errors: [{
        id: 'NotFoundError',
        status: '404',
        code: 'NotFoundError',
        title: 'NotFoundError',
        detail: 'Resource was not found'
      }]
    });
  });

  it('should return response in the JSON API Error format if error is instance of AggregateJsonApiError', () => {
    const err = new AggregateJsonApiError([
      new BadRequestError('Data is required'),
      new BadRequestError('Record is not found'),
    ], 400);

    const res = {
      send:  jest.fn().mockImplementation(function () { return this; }),
      status: jest.fn().mockImplementation(function () { return this; })
    };

    const next = jest.fn();

    jsonApiErrorHandler(err, undefined, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith({
      errors: [{
        id: 'BadRequestError',
        status: '400',
        code: 'BadRequestError',
        title: 'BadRequestError',
        detail: 'Data is required'
      }, {
        id: 'BadRequestError',
        status: '400',
        code: 'BadRequestError',
        title: 'BadRequestError',
        detail: 'Record is not found'
      }]
    });
  });

  it('should forward error to later processing if error is not instance of JsonApiError', () => {
    const err = new Error('This is not JsonApiError');

    const res = {
      send:  jest.fn().mockImplementation(function () { return this; }),
      status: jest.fn().mockImplementation(function () { return this; })
    };

    const next = jest.fn();

    jsonApiErrorHandler(err, undefined, res, next);

    expect(res.status).toHaveBeenCalledTimes(0);
    expect(res.send).toHaveBeenCalledTimes(0);

    expect(next).toHaveBeenCalledWith(err);
  });
});
