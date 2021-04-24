import Route from '@ember/routing/route';
import { datas } from 'first-app/data/datas';
import Services from 'first-app/classes/services';
 
export default class Ex2Route extends Route {
  model() {
    return new Services(datas);
  }
}