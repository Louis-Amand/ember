export default class contacts {


    datas;
    constructor(datas) {
      this.datas = datas;
    }

  
    get deleteds(){

      return this.datas.filterBy('isDeleted', true);
    }
  
      
    get contacts(){
        return this.datas.filterBy('isDeleted', false);
      }
    get deletedsCount(){

        
      return this.deleteds.length;
    }
  }