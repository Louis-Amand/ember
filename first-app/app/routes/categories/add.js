import Route from '@ember/routing/route'; 
import { action } from '@ember/object'; 

export default class CategoriesAddRoute extends Route {
  model() {
    return {}; // retourne un objet JS vide
  }

  @action save(data) {  //Sauvegarde la catégorie @action
    let category = this.store.createRecord('category', data);
    category.save();
  }
}