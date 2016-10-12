import Ember from 'ember';

export default Ember.Controller.extend({
    githubAuth: Ember.inject.service('github-auth'),
    tokenValue: null,
    actions: {
      updateToken: function(token) {
        let githubAuth = this.get('githubAuth');
        let store = this.get('store');
        let tokenRecord = store.createRecord('github-token', {
          id: 'primary-token',
          token: token
        });
        tokenRecord.save();
        githubAuth.set('tokenRecord', tokenRecord);
      },
    }
});
