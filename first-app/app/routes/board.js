import AbstractrouteRoute from './abstractroute';
import RSVP from 'rsvp';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BoardRoute extends AbstractrouteRoute {
  @service userAuth; // ajout du service pour la deconnexion

  model() {
    let user = this.userAuth.user;
    if (user) {
      var retour = RSVP.hash({
        orders: this.store.query('order', {
          filter: { idEmployee: user.id },
          include: 'orderdetails',
        }),
        employee: user,
      });
      return retour;
    }
  }

  @action logout() { // action DECONEXION 
    this.userAuth.logout();
    this.transitionTo('index');
  }
}