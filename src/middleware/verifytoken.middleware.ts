import {BaseMiddleware} from 'inversify-express-utils';
import {injectable} from 'inversify';
import express from 'express';

@injectable()
export class VerifyTokenMiddleware extends BaseMiddleware {
  public handler(req: any, res: express.Response, next: any) {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader === 'undefined') {
      res.sendStatus(403);
    } else {
      const bearerParts = bearerHeader.split(' ');
      if (bearerParts && bearerParts.length === 2) {
        const bearerToken = bearerParts[1];
        req.token = bearerToken;
        next();
      } else {
        res.sendStatus(403);
      }
    }
  }
}
