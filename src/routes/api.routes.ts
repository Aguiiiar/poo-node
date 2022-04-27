import express, { Router, Request, Response } from "express";

class ApiRouter {
    public router: express.Router;

    constructor() {
        this.router = Router();
        this.Routes();
    }

    public Routes() {
        this.router.get('/', async (req: Request, res: Response): Promise<Response> => {
            return res.send("Oi");
        });
    }
}

export default new ApiRouter();