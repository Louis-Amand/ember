import { helper } from '@ember/component/helper';
 
export default helper(function arrayContains(params/*, hash*/) {
  const [items, value,prop] = params; // definition des constantes items value prop avec pour valeur params (parametres recupéres)
  let id=prop ||'id'; //def de id et attribution de sa valeur (prop)
  return items.filterBy(id,value).length > 0;
});