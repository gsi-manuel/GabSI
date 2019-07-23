import {BaseRepository} from '../repositories/base/base-repository';
import {UserModel} from '../models/user.model';

export class UserService {
  private repo: BaseRepository;

  constructor() {
    this.repo = new BaseRepository(UserModel);
  }

  public create(user: any) {
    const attr_v = {email: user.email};
    const new_user = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    };
    const User = new UserModel(new_user);
    return this.repo.create(User, attr_v);
  }

  public find(req: any) {
    return this.repo.find(req);
  }

  public findOne(_id: string) {
    return this.repo.findOne(_id);
  }

  public update(_id: string, dataUpdate: any) {
    return this.repo.update(_id, dataUpdate);
  }

  public delete(_id: string) {
    return this.repo.delete(_id);
  }
}

export default UserService;
