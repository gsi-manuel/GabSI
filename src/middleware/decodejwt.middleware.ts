import {BaseMiddleware} from 'inversify-express-utils';
import {injectable} from 'inversify';
import * as jwt from 'jsonwebtoken';
import express from 'express';
import {Config} from '../config/config';

@injectable()
export class DecodeJWTMiddleware extends BaseMiddleware {
  public async handler(req: any, res: express.Response, next: any) {
    if (typeof req.token !== 'undefined') {
      try {
        const config = new Config();
        const payloadData = await jwt.decode(req.token, config.getJwtSecret());
        if (!payloadData) {
          res.sendStatus(401);
        } else {
          req.authData = payloadData;
          next();
        }
      } catch (e) {
        res.status(400).send(e.message);
      }
    } else {
      res.sendStatus(403);
    }
  }
}
