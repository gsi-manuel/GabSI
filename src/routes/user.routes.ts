import {Request, Response} from 'express';

import UserController from '../controllers/user.controller';

export class UserRoutes {
  private userController: UserController;

  constructor() {
    this.userController = new UserController();
  }
  public routes(route: any): any {
    route
      .route('/')
      .get((req: Request, res: Response) => {
        this.userController.find(req, res);
      })
      // POST endpoint
      .post((req: Request, res: Response) => {
        this.userController.create(req, res);
      });

    route
      .route('/:id')
      .get((req: Request, res: Response) => {
        this.userController.findOne(req, res);
      })
      .delete((req: Request, res: Response) => {
        this.userController.delete(req, res);
      })
      .put((req: Request, res: Response) => {
        this.userController.update(req, res);
      });

    return route;
  }
}

export default UserRoutes;
