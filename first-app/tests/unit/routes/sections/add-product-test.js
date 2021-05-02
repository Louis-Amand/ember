import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | sections/add-product', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:sections/add-product');
    assert.ok(route);
  });
});
