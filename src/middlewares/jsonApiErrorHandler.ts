import { default as JsonApiError } from '..';

export function jsonApiErrorHandler(err: any, req, res, next) {
  if (err instanceof JsonApiError) {
    const normalizedError = JSON.parse(JSON.stringify(err));

    res.status(parseInt(normalizedError.status, 10)).send({
      errors: [normalizedError]
    });
  } else {
    next(err);
  }
}
