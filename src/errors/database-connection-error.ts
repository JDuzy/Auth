import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
    statusCode = 500;
    reason = 'Error connecting to the DB'

    serializeErrors(): { message: String; field?: String }[] {
        return [{message: this.reason}]
    }
    constructor(message: String){
        super(message);
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
}