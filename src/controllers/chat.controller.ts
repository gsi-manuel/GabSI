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
  private async initChat(@requestParam('userId') userId: string, @request() req: any) {
    if (userId == req.authData.userId) {
      return this.badRequest("Can't chat with yourself...");
    }
    let chatRoom = this.chatService.retrieveOrCreateNewChat(req.authData.userId, userId);
    return this.json(chatRoom);
  }
}
