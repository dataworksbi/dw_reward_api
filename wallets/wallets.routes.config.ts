import { CommonRoutesConfig } from '../common/common.routes.config';
import express from 'express';

export class WalletsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'WalletsRoutes');
    }

    configureRoutes() {
        this.app.route(`/wallets`)
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`List of wallets`);
            })
            .post((req: express.Request, res: express.Response) => {
                res.status(200).send(`Post to wallets`);
            });

        this.app.route(`/wallets/:walletId`)
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                // this middleware function runs before any request to /users/:userId
                // but it doesn't accomplish anything just yet---
                // it simply passes control to the next applicable function below using next()
                next();
            })
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`GET requested for id ${req.params.walletId}`);
            })
            .put((req: express.Request, res: express.Response) => {
                res.status(200).send(`PUT requested for id ${req.params.walletId}`);
            })
            .patch((req: express.Request, res: express.Response) => {
                res.status(200).send(`PATCH requested for id ${req.params.walletId}`);
            })
            .delete((req: express.Request, res: express.Response) => {
                res.status(200).send(`DELETE requested for id ${req.params.walletId}`);
            });

        return this.app;
    }

}