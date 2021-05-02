import Abstractroute from './abstractroute';
import { action } from '@ember/object';

export default class LogoutRoute extends Abstractroute {
  @action Index() {
    this.userAuth.logout();
    this.transitionTo('index');
  }
}