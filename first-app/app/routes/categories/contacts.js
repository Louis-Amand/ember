import Route from '@ember/routing/route';

import { action } from '@ember/object';

export default class CategoriesContactsRoute extends Route {
  model(params){
    return this.store.findRecord('contacts', params.category_id);
  }


  setupController(controller, model){}

  willTransition(){}


  @action delete(contact){   

    return this.datas.filterBy('isDeleted',true);

  }

  @action cancelDeletetion(contacts){   //Annule supp des contacts marqués comme sélectionnés.

    contacts.forEach(
      (c)=>c.rollbackAttributes()
    )
  }

  @action update(category, contact){  // vers le contact à modifier.

    this.transitionTo('categories.contacts.update',category.id,contact.id);
  }

  @action confirmDeletion(contacts){//suppression définitive des contacts.

    contacts.forEach((c)=>c.save() )
  }
}