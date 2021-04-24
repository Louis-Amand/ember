import Route from '@ember/routing/route';
import { datas } from 'tds/data/datas';
import Services from 'tds/classes/services';
 
export default class Ex2Route extends Route {
  model() {
    return new Services(datas);
  }
}