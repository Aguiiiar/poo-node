import HttpException from "./HttpException";

export class BadRequest extends HttpException {
    constructor() {
        super(400, 'Bad Request');
    }
}