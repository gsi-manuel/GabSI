import * as express from 'express';
import {controller, httpGet, request, BaseHttpController, requestParam} from 'inversify-express-utils';
import {inject} from 'inversify';
import {TYPES} from '../constants/types';
import {ChatService} from '../services/chat.service';

@controller('/chat', TYPES.VerifyTokenMiddleware, TYPES.DecodeJWTMiddleware)
export class ChatController extends BaseHttpController {
  constructor(@inject(TYPES.ChatService) private chatService: ChatService) {
    super();
  }

  @httpGet('/:userId')
  private async initChat(@requestParam('userId') id: string, @request() req: any) {
    if (id == req.authData.userId) {
      return this.badRequest("Can't chat with yourself...");
    }
    const context: any = {
      message: 'Init chat',
    };
    return this.json(context);
  }
}
