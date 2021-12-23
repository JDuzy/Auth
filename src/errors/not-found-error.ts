import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError{
    statusCode = 404;

    constructor(msg: string){
        super(msg)
        Object.setPrototypeOf(this, NotFoundError.prototype)
    }

    serializeErrors(): { message: String; field?: String | undefined; }[] {
        return [{message: 'Not Found'}]
    }

}