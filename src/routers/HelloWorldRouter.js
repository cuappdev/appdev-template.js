// @flow
import { AppDevRouter } from 'appdev';

class HelloWorldRouter extends AppDevRouter {

  constructor() {
    super('GET');
  }

  getPath(): string {
    return '/';
  }

  async content(req: Request): Promise<any> {
    return 'hello, world';
  }

}

export default new HelloWorldRouter().router;