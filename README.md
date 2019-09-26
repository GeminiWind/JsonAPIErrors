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

- BadRequestError
- UnauthorizedError
- ForbiddenError
- NotFoundError
- MethodNotAllowedError
- NotAcceptableError
- RequestTimeoutError
- UnsupportedMediaTypeError
- InternalError
- NotImplementedError
- BadGatewayError
- ServiceUnavailableError
- GatewayTimeoutError

### Example

To use these errors, import it and throw it like normal error

```
import { BadRequestError } from 'json-api-error';

throw new BadRequestError('Request is invalid');
```

Or with options

```
import { BadRequestError } from 'json-api-error';

throw new BadRequestError({
    id: 'BadRequestError',
    status: '400',
    title: 'BadRequestError',
    detail: 'The #/userName must be number'
}));
```

### Options

| Properties  | Detail   | Type  |  Default Value  |
|---|---|---|---|
| id  | a unique identifier for this particular occurrence of the problem  | string  |  equal to error name |
| links  | TBD  |  object | N/A |
| status | the HTTP status code applicable to this problem, expressed as a string value  |  string | equal to HTTP code |
| code |  an application-specific error code, expressed as a string value | string  | equal to error name |
| title | a short, human-readable summary of the problem  | string  |  equal to error name |
| detail | a human-readable explanation specific to this occurrence of the problem  | string  |  equal to error name |
| source |  TBD |  object | NA |
| meta | a meta object containing non-standard meta-information about the error.  | object  |  NA |

### API 

#### toJSON

