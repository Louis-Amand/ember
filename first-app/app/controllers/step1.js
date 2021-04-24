import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';


export default class Step1Controller extends Controller {
    includedItems = [];
  dispoItems = [];

  @tracked dispoItems_ = [];
  @tracked includedItems_ = [];

  changeDispo(elements){
  }

  @action
  changeIncluded(elements){
    this.includedItems_ = elements;
  }

  @action
  add(source, destination, truc){
    destination.pushObjects(truc);
    source.removeObjects(truc);
  }

  remove(source, destination, truc){
    source.pushObjects(truc);
    destination.removeObjects(truc);
  }
}