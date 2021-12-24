import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = "Error connecting to the DB";

  serializeErrors(): { message: string; field?: string }[] {
    return [{ message: this.reason }];
  }
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}
