import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import * as socketIO from 'socket.io';
const dotenv = require('dotenv');
import {InversifyExpressServer} from 'inversify-express-utils';
import container from './container';

export class App {
  private static instance: App;
  public express: express.Application;
  public socket: socketIO.Server;

  private constructor() {
    const server = new InversifyExpressServer(container);
    this.express = server.build();
    this.config();
    this.socket = socketIO.listen(server);
  }

  static getInstance(): App {
    if (!App.instance) {
      App.instance = new App();
    }

    return App.instance;
  }

  private config(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({extended: false}));
    this.express.use(helmet());
    this.express.use(cors());
    dotenv.config();
  }

  private registerMiddleWare(): void {}
}
