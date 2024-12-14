type ErrorsType = {
  type: string;
  message: string;
  path: string;
  location: string;
};

export class ValidationError {
  errors: ErrorsType[];

  constructor(errors: ErrorsType[]) {
    this.errors = errors;
  }
}
