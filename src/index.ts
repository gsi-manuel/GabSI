import 'reflect-metadata';
import {App} from './App';
import {Config} from './config/config';

const config = new Config();

require('./config/db');

const instance = App.getInstance();

instance.express.listen(config.getPort(), () => {
  return console.log(`server is listening on ${config.getPort()}`);
});

export default instance.socket;
