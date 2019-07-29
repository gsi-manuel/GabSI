import * as express from 'express';
import {
  controller,
  httpGet,
  httpPost,
  httpDelete,
  request,
  response,
  requestParam,
  BaseHttpController,
  httpPatch,
} from 'inversify-express-utils';
import {inject} from 'inversify';
import {TYPES} from '../constants/types';

import UserService from '../services/user.service';

@controller('/admin/users')
export class UserController extends BaseHttpController {
  constructor(@inject(TYPES.UserService) private userService: UserService) {
    super();
  }

  @httpGet('/')
  private async list(@request() req: express.Request, @response() res: express.Response) {
    try {
      const users = await this.userService.find(req);
      console.log(`testing`);
      res.send({users});
    } catch (err) {
      res.status(400).send(err);
    }
  }

  @httpPost('/')
  private async create(@request() req: express.Request, @response() res: express.Response) {
    try {
      await this.userService.create(req.body);
      res.sendStatus(201);
    } catch (err) {
      res.status(400).json({error: err.message});
    }
  }

  @httpGet('/:id')
  private async get(@requestParam('id') id: string) {
    try {
      console.log(id);
      const user = await this.userService.findOne(id);
      return this.json({user});
    } catch (err) {
      return this.badRequest(err.message);
    }
  }

  @httpPatch('/:id')
  private async update(
    @requestParam('id') id: string,
    @request() req: express.Request,
    @response() res: express.Response,
  ) {
    try {
      await this.userService.update(id, req.body);
      res.sendStatus(200);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  @httpDelete('/:id')
  private async delete(@requestParam('id') id: string) {
    try {
      const result = await this.userService.delete(id);
      return this.ok();
    } catch (err) {
      return this.badRequest(err.message);
    }
  }
}

export default UserController;
