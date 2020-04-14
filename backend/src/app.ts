import express from 'express';
import routes from './routes';
import cors from 'cors';

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(routes);
        this.app.use(cors());
    }
}

export default new App().app;