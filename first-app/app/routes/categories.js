
import Route from '@ember/routing/route';

import { inject as service } from '@ember/service';


export default class CategoriesRoute extends Route {
  @service router;

  model() {
    return this.store.findAll('category'); // model() ⇒ retourne la liste des catégories depuis le store
  }

  afterModel(model, transition) { // afterModel(model, transition) ⇒ Charge tous les contacts depuis le store + effectue une transition vers la première catégorie pour l'afficher (si elle existe) et si la route sollicitée est bien categories (et non une de ses routes enfant)

    this.store.findAll('contact');
    if (model.length > 0 && transition.targetName === 'categories.index') {
      
        this.transitionTo('categories.contacts', model.get('firstObject'));
    }
  }
}