import { CustomError } from 'ts-custom-error';

interface ILink {
  about: string;
}

interface ISource {
  pointer: string;
  parameter: string;
}

interface IMeta {
  [key:string]: any;
}
interface IJsonApiError {
  id: string;
  link?: ILink;
  status: string;
  code: string;
  title: string;
  detail: string;
  source?: ISource;
  meta?: IMeta;
}

class JsonApiError extends CustomError {
  static id: string;
  static link: ILink;
  static status: string;
  static code: string;
  static title: string;
  static detail: string;
  static source: ISource;
  static meta: IMeta;

  constructor(input: string | IJsonApiError) {
    if (typeof input === 'string') {
      JsonApiError.detail = input;
    }

    if (typeof input === 'object') {
    // TODO: validate input as JSON API Error schemas
      Object.keys(input).forEach((key) => {
        if (input[key]) {
          JsonApiError[key] = input[key];
        }
      });
    }

    super(JsonApiError.detail);
  }

  toJSON() {
    const allowedProps: string[] = ['id', 'link', 'status', 'code', 'title', 'detail', 'source', 'meta'];

    return allowedProps.reduce(
      (error: object, propName: string): any => {
        if (JsonApiError[propName]) {
          error[propName] = JsonApiError[propName];
        }

        return error;
      },
      {});
  }
}

export default JsonApiError;
