import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('showcase-engine', 'Integration | Component | showcase engine', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{showcase-engine}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#showcase-engine}}
      template block text
    {{/showcase-engine}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
