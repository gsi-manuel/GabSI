import {Container} from 'inversify';
import {TYPES} from './constants/types';
import {ProvinceService, UserService, ChatService} from './services/services';

// controllers
import './controllers/controllers';

// container
let container = new Container();

container.bind<ProvinceService>(TYPES.ProvinceService).to(ProvinceService);
container.bind<UserService>(TYPES.UserService).to(UserService);
container.bind<ChatService>(TYPES.ChatService).to(ChatService);

export default container;
