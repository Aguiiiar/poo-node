import HttpException from "./HttpException";

class BadRequest extends HttpException {
    constructor() {
        super(400, 'Bad Request');
    }
}

export default new BadRequest();