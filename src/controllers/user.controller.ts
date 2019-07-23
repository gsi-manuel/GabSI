import {Request, Response} from 'express';

import UserService from '../services/user.service';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public create(req: Request, res: Response) {
    (async () => {
      try {
        await this.userService.create(req.body);
        res.sendStatus(201);
      } catch (err) {
        res.status(400).send(err);
      }
    })();
  }

  public find(req: Request, res: Response) {
    (async () => {
      try {
        const provinces = await this.userService.find(req);
        res.send({provinces});
      } catch (err) {
        res.status(400).send(err);
      }
    })();
  }

  public findOne(req: Request, res: Response) {
    (async () => {
      try {
        const _id = req.params.id;
        const province = await this.userService.findOne(_id);
        res.send(province);
      } catch (err) {
        res.status(400).send(err);
      }
    })();
  }

  public update(req: Request, res: Response) {
    (async () => {
      try {
        const _id = req.params.id;
        await this.userService.update(_id, req.body);
        res.sendStatus(200);
      } catch (err) {
        res.status(400).send(err);
      }
    })();
  }

  public delete(req: Request, res: Response) {
    (async () => {
      try {
        const _id = req.params.id;
        await this.userService.delete(_id);
        res.sendStatus(200);
      } catch (err) {
        res.status(400).send(err);
      }
    })();
  }
}

export default UserController;
