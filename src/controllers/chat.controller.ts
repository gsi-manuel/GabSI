import * as express from 'express';
import {controller, httpGet, request, requestParam, BaseHttpController} from 'inversify-express-utils';
import {inject} from 'inversify';
import {TYPES} from '../constants/types';
import {ChatService} from '../services/chat.service';

@controller('/chat', TYPES.VerifyTokenMiddleware)
export class ChatController extends BaseHttpController {
  constructor(@inject(TYPES.ChatService) private chatService: ChatService) {
    super();
  }

  @httpGet('/:userId')
  private async initChat(@requestParam('id') id: string, @request() req: express.Request) {
    const context: any = {
      message: 'Init chat',
    };
    return this.json(context);
  }
}
