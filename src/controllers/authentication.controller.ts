import {controller, httpPost, BaseHttpController} from 'inversify-express-utils';
import * as jwt from 'jsonwebtoken';
import {Config} from '../config/config';

@controller('/login')
export class AuthenticationController extends BaseHttpController {
  /*constructor(@inject(TYPES.ChatService) private chatService: ChatService) {
    super();
  }*/

  @httpPost('/')
  public async login() {
    const mocUser = {
      userId: '25',
    };

    const config = new Config();

    const token = jwt.sign(mocUser, config.getJwtSecret());

    return this.json({
      token,
    });
  }
}
