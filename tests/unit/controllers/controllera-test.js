import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | controllera', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:controllera');
    assert.ok(controller);
  });
});
