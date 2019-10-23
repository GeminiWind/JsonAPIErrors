# **JSON API Errors**

JSON API Errors is a collection of popular errors which is format under of JSON API Specification. More detailed in [here](https://jsonapi.org/format/#error-objects)

## Getting Started

### Installation
The easiest way to install `json-api-error` is using NPM. If you have Node.js installed, it is most likely that you have NPM installed as well.

```
$ npm install json-api-error
```

### Usage

At the current implementation, `json-api-error` support the following common errors

- `BadRequestError`
- `UnauthorizedError`
- `ForbiddenError`
- `NotFoundError`
- `MethodNotAllowedError`
- `NotAcceptableError`
- `RequestTimeoutError`
- `UnsupportedMediaTypeError`
- `InternalError`
- `NotImplementedError`
- `BadGatewayError`
- `ServiceUnavailableError`
- `GatewayTimeoutError`

### Example

### Error usage with simple detailed message

```
import { BadRequestError } from 'json-api-error';

throw new BadRequestError('Request is invalid');
```

### Error usage with options

```
import { BadRequestError } from 'json-api-error';

throw new BadRequestError({
    id: 'BadRequestError',
    code: 'BadRequestError',
    title: 'BadRequestError',
    detail: 'The #/userName must be number'
}));
```

### Error usage with customized your JsonApiError

```
import JsonApiError from 'json-api-error';

throw new JsonApiError({
    id: 'RequestEntityTooLargeError',
    status: '413',
    code: 'RequestEntityTooLargeError',
    title: 'RequestEntityTooLargeError',
    detail: 'Request Entity Too Large'
  });
```

### Express Middleware - JSON API Error Handler usage

`json-api-error` also ships a Express middleware to handle these JSON API Errors. This middleware will catch JSON API Error and return response for your end-user as the following example format (including the status response):

```
{
  errors: [{
    id: 'NotFoundError',
    status: '404',
    code: 'NotFoundError',
    title: 'NotFoundError',
    detail: 'Resource was not found'
  }]
}
```

To use this, configure your Express app


```
import { jsonApiErrorHandler } from 'json-api-error/middlewares';


app.use(jsonApiErrorHandler);

```

**Note:** For best practice, please place `jsonApiErrorHandler` below utilized middlewares.

### Options

| Properties  | Detail   | Type  |  Default Value  |
|---|---|---|---|
| id  | a unique identifier for this particular occurrence of the problem  | string  |  equal to error name |
| links  | a links object, more detailed in [here](https://jsonapi.org/format/#error-objects) |  object | N/A |
| status | the HTTP status code applicable to this problem, expressed as a string value  |  string | equal to HTTP code |
| code |  an application-specific error code, expressed as a string value | string  | equal to error name |
| title | a short, human-readable summary of the problem  | string  |  equal to error name |
| detail | a human-readable explanation specific to this occurrence of the problem  | string  |  equal to error name |
| source |  an object containing references to the source of the error, more detailed in [here](https://jsonapi.org/format/#error-objects) |  object | N/A |
| meta | a meta object containing non-standard meta-information about the error.  | object  |  N/A |

## LICENSE

MIT
