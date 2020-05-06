import AggregateJsonApiError from '../src/AggregateJsonApiError';
import { BadRequestError } from '../src/';

describe('AggregateJsonApiError', () => {
  it('throw BadRequestError', () => {
    expect(() => {
      throw new AggregateJsonApiError([
        new BadRequestError('Data is required.'),
        new BadRequestError('Request is invalid.'),
      ], 400);
    }).toThrow(AggregateJsonApiError);
  });
});
