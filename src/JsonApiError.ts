import { CustomError } from 'ts-custom-error';

interface ILink {
  about: string;
}

interface ISource {
  pointer: string;
  parameter: string;
}

interface IMeta {
  [key: string]: any;
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

interface IJsonApiErrorOptionalField {
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

  private _error;

  static readonly allowedProps: string[] = [
    'id',
    'link',
    'status',
    'code',
    'title',
    'detail',
    'source',
    'meta'
  ];

  constructor(input: any);
  constructor(input: IJsonApiErrorOptionalField);
  constructor(input: IJsonApiError) {
    let opts: any = {};

    const inputType = typeof input;

    switch (inputType) {
    case 'string':
      opts.detail = input;
      break;
    case 'object':
      opts = Object.keys(input).reduce((acc, k) => {
        if (k && input[k] && JsonApiError.allowedProps.includes(k)) {
          acc[k] = input[k];
        }

        return acc;
      }, {});
      break;
    default:
      throw new TypeError(`Could not parse ${input} as JsonApiError options`);
    }

    super(opts.detail);

    this._error = JsonApiError.allowedProps.reduce(
      (error: object, propName: string): any => {
        if (opts[propName]) {
          error[propName] = opts[propName];
        } else if (this.constructor[propName]) {
          error[propName] = this.constructor[propName];
        }

        return error;
      },
      {}
    );
  }

  toJSON() {
    return this._error;
  }
}

export default JsonApiError;
