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

interface IJsonApiErrorOptinalField {
  id?: string;
  link?: ILink;
  code?: string;
  title?: string;
  detail?: string;
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

  static readonly allowedProps: string[] =  ['id', 'link', 'status', 'code', 'title', 'detail', 'source', 'meta'];

  constructor(input: any);
  constructor(input: IJsonApiErrorOptinalField)
  constructor(input: IJsonApiError) {
    if (typeof input === 'string') {
      JsonApiError.detail = input;
    } else if (input === Object(input)) {
      Object.keys(input).forEach((key) => {
        if (key && input[key] && JsonApiError.allowedProps.includes(key)) {
          this.constructor[key] = input[key];
        }
      });
    } else {
      throw new TypeError(`Could not parse ${input} as JsonApiError options`);
    }

    super(JsonApiError.detail);
  }

  toJSON() {
    return JsonApiError.allowedProps.reduce(
      (error: object, propName: string): any => {
        if (this.constructor[propName]) {
          error[propName] = this.constructor[propName];
        }

        return error;
      },
      {});
  }
}

export default JsonApiError;
