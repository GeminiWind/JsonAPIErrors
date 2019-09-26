import { NotFoundError } from '../src/';

describe('errors', () => {
  describe('NotFoundError', () => {
    it('throw NotFoundError', () => {
      expect(() => {
        throw new NotFoundError('Record was not found');
      }).toThrow(NotFoundError);
    });
  });
});
