import { Request, Response, Router} from "express";

import { ProvinceRoutes } from './province.routes';

export class Routes {
    private provinceRoutes: ProvinceRoutes;
    
    constructor() {
        this.provinceRoutes = new ProvinceRoutes();
    }
    public routes(app: any): void {   
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        });  
        
        let provinceRoute = this.provinceRoutes.routes(Router());        
        app.use('/admin/provinces', provinceRoute)          
    }
}