import Ember from 'ember';
import layout from '../templates/components/showcase-engine';

export default Ember.Component.extend({
  ajax: Ember.inject.service(),
  githubAuth: Ember.inject.service('github-auth'),
  layout,
  repoUser: null,
  repoPath: null,
  userObject: null,
  repoObject: null,
  didReceiveAttrs() {
    let repoUser = this.get('repoUser');
    let repoPath = this.get('repoPath');
    let token = this.get('githubAuth').get('token');
    let userEndpoint = `https://api.github.com/users/${repoUser}?access_token=${token}`;
    let repoEndpoint = `https://api.github.com/repos/${repoPath}?access_token=${token}`;

    this.get('ajax').request(userEndpoint).then((result)=>{
      this.set('userObject', result);
    });

    this.get('ajax').request(repoEndpoint).then((result)=>{
      this.set('repoObject', result);
    });
  },

});
