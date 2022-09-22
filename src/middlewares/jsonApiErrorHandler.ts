import { default as JsonApiError, AggregateJsonApiError } from '..';

export function jsonApiErrorHandler(err: any, req, res, next) {
  if (err instanceof JsonApiError) {
    const normalizedError = JSON.parse(JSON.stringify(err));

    res.status(parseInt(normalizedError.status, 10)).send({
      errors: [normalizedError]
    });
  } else if (err instanceof AggregateJsonApiError) {
    res.status(err.status).send({
      errors: err.errors.map(e => JSON.parse(JSON.stringify(e)))
    });
  } else {
    next(err);
  }
}
