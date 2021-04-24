import Route from '@ember/routing/route';
import { action } from '@ember/object'; // ajout import action

export default class TestnewRoute extends Route {

  model(){
      
    return {};
  }

  @action sauvegarder(individu){ // action sauvegarder
    let contact = this.store.createRecord('contact', individu);
    contact.sauvegarder().then(()=>this.transitionTo("test-list"));
  }
}