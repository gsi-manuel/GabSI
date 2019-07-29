import * as mongoose from 'mongoose';
import {instanceMethod, pre, prop, Typegoose, ModelType, InstanceType} from 'typegoose';
const bcrypt = require('bcrypt');

@pre<User>('save', function(next) {
  // or @pre(this: Car, 'save', ...
  if (!this.isModified('password')) {
    return next();
  }
  this.password = this.generateHash(this.password);
  next();
})
class User extends Typegoose {
  @prop()
  firstName: string;

  @prop()
  lastName: string;

  @prop({unique: true, lowercase: true, required: true})
  email: string;

  @prop({required: true})
  password: string;

  // @prop()
  // lastLogin: string;

  @instanceMethod
  checkPassword(password: string): any {
    return bcrypt.compareSync(password, this.password);
  }

  @instanceMethod
  generateHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(+process.env.SALT_FACTOR), null);
  }
}

export const UserModel = new User().getModelForClass(User, {
  schemaOptions: {collection: 'users'},
});
