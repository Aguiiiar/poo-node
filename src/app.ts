import express, { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import cors from "cors";
import dotnev from "dotenv";
import ApiRouter from "./routes/api.routes"
import errorMiddleware from "./middlewares/Error";
import { NotFound } from "./exceptions/"

dotnev.config();

class App {
    private app: express.Application;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        this.initializeErrorHandling();
    }

    private middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded());
    }

    private initializeErrorHandling() {
        this.app.use(errorMiddleware);
    }

    private routes() {
        this.app.use(ApiRouter);
        this.app.use((request, response) => {
            return response.send(new NotFound());
        });
    }

    public listen() {
        this.app.listen(process.env.PORT as string, () => {
            console.log("Ligado");
        });
    }
}

export default new App();