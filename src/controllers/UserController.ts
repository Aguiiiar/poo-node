import { NotFound, Ok } from 'exceptions';
import { Request, Response } from 'express'

class UserController {

    async index(req: Request, res: Response) {
        // const { user, pass } = req.body;
        // if (!req.body) {
        //     return res.send(new NotFound());
        // }

        return res.send(new Ok());
    }
}

export default new UserController();