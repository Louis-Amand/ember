export default class Services {
    services = [];


    constructor(services) {
      this.services = services;

    }
  
    get ServicesActives() {
      let services = this.services.filterBy('active', true);
      let nbservices = 0;
      services.forEach((s) => {
        nbservices = nbservices + 1;
      });

      if (nbservices > 1){
        return 'Plusieurs services selectionné';
      }else if(nbservices == 1){
        return 'Un service de selectionné';
      }else{
        return 'Aucun service selectionné';
      }
    }
  
    get sumActive() {
      let services = this.services.filterBy('active', true);
      let resultat =0;
      services.forEach((s) => {
        resultat += s.price;
      });
      return resultat;
    }
  
    get code() {
      return '65sdds5451dt';
    }
  }