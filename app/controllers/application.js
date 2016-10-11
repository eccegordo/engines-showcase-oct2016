import Ember from 'ember';

export default Ember.Controller.extend({
    githubAuth: Ember.inject.service('github-auth'),
    tokenValue: 'abc123',
    actions: {
      updateToken: function(token) {
        let githubAuth = this.get('githubAuth');
        githubAuth.set('token', token);
      }
    }

});
