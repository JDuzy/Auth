export abstract class CustomError extends Error{
    abstract statusCode: number;

    constructor(message: String){
        super();
        Object.setPrototypeOf(this, CustomError.prototype);
    }

    abstract serializeErrors(): {message: String, field?: String}[];


}