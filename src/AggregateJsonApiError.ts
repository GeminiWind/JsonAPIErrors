import AggregateError from 'aggregate-error';
import JsonApiError from './JsonApiError';

class AggregateJsonApiError extends AggregateError {
	public status;
	public errors;

  constructor({
		status,
		errors,
	}) {
		if (!Number.isInteger(status)) {
			throw new TypeError(`Expected status to be an Int, got ${typeof status}`)
		}
		// filter to get errors which is instance of JsonApiError
		const validErrors = errors.filter(error => error instanceof JsonApiError);
		super(validErrors);

		this.errors = validErrors;
		this.status = status;
	}
}

export default AggregateJsonApiError;