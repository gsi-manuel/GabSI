import * as mongoose from 'mongoose';
import {prop, Typegoose, ModelType, InstanceType} from 'typegoose';

class Chat extends Typegoose {
  @prop({index: true, required: true})
  id: string;

  @prop()
  messages: any[];
}

export const ChatModel = new Chat().getModelForClass(Chat, {
  schemaOptions: {collection: 'chats'},
});
