import Ember from 'ember';
const { computed } = Ember;
const { isEmpty } = Ember;

export default Ember.Service.extend({
  store: Ember.inject.service('store'),
  tokenRecord: null,

  init(){
    this._super(...arguments);
    let self = this;
    this.get('store').findAll('github-token').then(function(results){
      let matchedResult = null;
      results.forEach(function(item) {
        if (item.get('id') === 'primary-token') {
          matchedResult = item;
        }
      });
      if (matchedResult) {
        self.set('tokenRecord', matchedResult);
      }
    });
  },

  token: computed('tokenRecord.id', function() {
    let store = this.get('store');
    let tokenRecord = this.get('tokenRecord');
    if (isEmpty(tokenRecord)){
      return null;
    }
    let tokenValue = tokenRecord.get('token');
    if (isEmpty(tokenValue)){
      return store.peekRecord('github-token', 'primary-token');
    } else {
      return tokenValue;
    }
  }),
});
