import app from '../App';
import {ChatModel} from '../models/chat.model';
import {BaseRepository} from '../repositories/base/base-repository';
import {Request} from 'express';
import {injectable} from 'inversify';
import {TYPES} from '../constants/types';

export interface IMessage {
  body: string;
  from: any;
  to: any;
}

export interface ITyping {
  to: any;
}

export enum ChatEvents {
  MESSAGE = 'message',
  TYPING = 'typing',
  NEW_MESSAGE = 'new_message',
}

@injectable()
export class ChatService {
  /*private sio: any;
    private chatRepository: BaseRepository;

    constructor() {
      this.sio = app.socket;
      this.chatRepository = new BaseRepository(ChatModel);
    }

    public connect(): void {
        this.sio.on('connect', (socket: any) => {
            const session = socket.request.session
            socket.session = session;
            //socket.join(session.socket);
            socket.on(ChatEvents.MESSAGE, function(data: IMessage) {
                this.sendMessage(socket, data)
            });
            socket.on(ChatEvents.TYPING, function(data: ITyping){
                this.typing(socket, data);
            });
       });
    }

    public retrieveOrCreateNewChat(request: Request, id: string): any {
       //let chat = this.chatRepository.findOneBy({"id": id});
      // if(!chat) {
           // TODO create
      // }
    }
    
    // Protectes
    protected sendMessage(socket: any, message: IMessage){
        //TODO(yoan): Save in DB
        socket.to(message.to).emit(ChatEvents.NEW_MESSAGE, message);
    }

    protected typing(socket: any, typing: ITyping){
        //TODO(yoan): Save in DB
        socket.to(typing.to).emit(ChatEvents.TYPING, typing);
    }*/
}
