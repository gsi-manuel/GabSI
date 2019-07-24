import * as express from 'express';
import {
  controller,
  httpGet,
  httpPost,
  httpDelete,
  requestBody,
  request,
  response,
  requestParam,
  BaseHttpController,
  httpPatch,
} from 'inversify-express-utils';
import {inject} from 'inversify';
import {TYPES} from '../constants/types';
import {ProvinceService} from '../services/province.service';

@controller('/admin/provinces')
export class ProvinceController extends BaseHttpController {
  constructor(@inject(TYPES.ProvinceService) private provinceService: ProvinceService) {
    super();
  }

  @httpGet('/')
  private async list(req: express.Request) {
    try {
      const provinces = await this.provinceService.find(req);
      return this.json({provinces});
    } catch (err) {
      return this.badRequest(err.message);
    }
  }

  @httpPost('/')
  private async create(@request() req: express.Request) {
    try {
      const result = await this.provinceService.create(req.body);
      return this.json({...result}, 201);
    } catch (err) {
      return this.badRequest(err.message);
    }
  }

  @httpGet('/:id')
  private async get(@requestParam('id') id: string) {
    try {
      console.log(id);
      const province = await this.provinceService.findOne(id);
      return this.json({province});
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
      await this.provinceService.update(id, req.body);
      res.sendStatus(200);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  @httpDelete('/:id')
  private async delete(@requestParam('id') id: string) {
    try {
      const result = await this.provinceService.delete(id);
      return this.ok();
    } catch (err) {
      return this.badRequest(err.message);
    }
  }
}
