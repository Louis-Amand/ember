import Route from '@ember/routing/route';

export default class ProductsRoute extends Route {
  model() {
    return this.store.findAll('section', { include: 'products' });
  }

}