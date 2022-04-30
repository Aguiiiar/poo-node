import HttpException from "./HttpException";

export class Ok extends HttpException {
    constructor() {
        super(200, 'Ok');
    }
}