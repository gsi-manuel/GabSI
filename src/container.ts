import {Container} from 'inversify';
import {TYPES} from './constants/types';
import {ProvinceService, UserService, ChatService} from './services/services';
import {VerifyTokenMiddleware, DecodeJWTMiddleware} from './middleware/middleware';
// controllers
import './controllers/controllers';

// container
let container = new Container();

container.bind<ProvinceService>(TYPES.ProvinceService).to(ProvinceService);
container.bind<UserService>(TYPES.UserService).to(UserService);
container.bind<ChatService>(TYPES.ChatService).to(ChatService);
container.bind<VerifyTokenMiddleware>(TYPES.VerifyTokenMiddleware).to(VerifyTokenMiddleware);
container.bind<DecodeJWTMiddleware>(TYPES.DecodeJWTMiddleware).to(DecodeJWTMiddleware);

export default container;
