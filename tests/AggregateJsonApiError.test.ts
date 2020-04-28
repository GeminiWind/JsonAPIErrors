import AggregateJsonApiError from '../src/AggregateJsonApiError';
import { BadRequestError } from '../src/';

describe('AggregateJsonApiError', () => {
  it('throw BadRequestError', () => {
    expect(() => {
      throw new AggregateJsonApiError({
        status: 400,
        errors: [
          new BadRequestError('Data is required.'),
          new BadRequestError('Request is invalid.'),
        ]
      });
    }).toThrow(AggregateJsonApiError);
  });
});
