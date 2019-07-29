import {Request, Response, Router} from 'express';

import {ProvinceRoutes} from './province.routes';
import UserRoutes from './user.routes';

export class Routes {
  private provinceRoutes: ProvinceRoutes;
  userRoutes: UserRoutes;

  constructor() {
    this.provinceRoutes = new ProvinceRoutes();
    this.userRoutes = new UserRoutes();
  }
  public routes(app: any): void {
    app.route('/').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'GET request successfulll!!!!',
      });
    });

    const provinceRoute = this.provinceRoutes.routes(Router());
    app.use('/admin/provinces', provinceRoute);

    const userRoute = this.userRoutes.routes(Router());
    app.use('/admin/users', userRoute);
  }
}
