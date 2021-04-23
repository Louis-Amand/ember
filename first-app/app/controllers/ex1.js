import Controller from '@ember/controller';
import {action} from '@ember/object';
import {tracked} from "@glimmer/tracking";

export default class Ex1Controller extends Controller {
  @tracked content = 'Tape ici ton message';


  get informationDeTexte() {
    if (this.taille < 50 && this.taille > 20) {
      return 'Attention il vous reste entre 50 et 20 caractères';
    } else if (this.taille < 20 && this.taille > 0) {
      return 'DANGER il ne reste plus que 20 carcatères !!';
    } else if (this.taille < 0) {
      return 'la tu es sensé ne plus pouvoir écrire';
    }else{
        return 'Tout va bien';
    }
  }
  get taille() {
    return 100 - this.content.length;
  }

  @action
  enregistrer() {}

  @action
  effacer() {
    this.content = '';
  }

}