import Controller from '@ember/controller';

import { tracked } from '@glimmer/tracking';

export default class ContactsController extends Controller {
  @tracked datas;// Liste initiale des contacts (initialisée depuis le setupController de la route)

  get contacts() {   //Liste filtrée des contacts non supprimés
    return this.datas;
  }

  get deleteteds() { // Liste des contacts marqués comme supprimés.
    return this.datas;
  }

  get deletetedsCount() { // Nombre de contacts marqués comme supprimés.
    return this.datas;
  }
}