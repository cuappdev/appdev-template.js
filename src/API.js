// @flow
import { AppDevAPI } from 'appdev';
import bodyParser from 'body-parser';
import HelloWorldRouter from './routers/HelloWorldRouter';
import {Router} from 'express';

class API extends AppDevAPI {

  constructor() {
    super();
  }

  getPath(): string {
    return '/';
  }

  middleware(): Array<any> {
    return [bodyParser.json()];
  }

  routers(): Array<Router> {
    return [HelloWorldRouter];
  }

}

export default API;