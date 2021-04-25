import Route from '@ember/routing/route';

import { action } from '@ember/object'; //ne pas oublier IMPORT ACTIONS !!!!

export default class ContactsAddRoute extends Route {

  model(){ // Retourne une instance de contact initialisée en JSON
    
    return{};
  }

  @action add(data){
    let contact = this.store.createRecord('contact', data);
    
    contact.save().then(()=>this.transistionTo('contact')
    );
  }
}