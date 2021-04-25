import Route from '@ember/routing/route';
import { action } from '@ember/object'; // import ACTION ( pour le update)

export default class ContactsUpdateRoute extends Route {

    /*model(){ // Retourne une instance de contact modifié
    
        return{};
      }*/

    renderTemplate(controller, model) { // rendertemplate pour dire que l on depend du template de contacts/add
        this.render('contacts.add');
      }

      @action save(contact){ // action save
        contact.save().then(()=>{
          this.transistionTo('contact');
        });
      }
}
