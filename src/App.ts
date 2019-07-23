import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
const dotenv = require('dotenv');
import {InversifyExpressServer} from 'inversify-express-utils';
import container from './container';

class App {
  public express: express.Application;

  constructor() {
    const server = new InversifyExpressServer(container);
    this.express = server.build();
    this.config();
  }

  private config(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({extended: false}));
    this.express.use(helmet());
    this.express.use(cors());
    dotenv.config();
  }
}

export default new App().express;
