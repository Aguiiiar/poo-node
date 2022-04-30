import HttpException from "./HttpException";

export class NotFound extends HttpException {
    constructor() {
        super(404, 'Not found');
    }
}
