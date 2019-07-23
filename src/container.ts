import {Container} from 'inversify';
import {TYPES} from './constants/types';
import {ProvinceService, UserService, ChatService} from './services/services';

//include controllers
import './controllers/controllers';

let container = new Container();

container.bind<ProvinceService>(TYPES.ProvinceService).to(ProvinceService);
container.bind<UserService>(TYPES.UserService).to(UserService);
container.bind<ChatService>(TYPES.ChatService).to(ChatService);

export default container;
