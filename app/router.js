import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('presentation');
  this.route('hello-inrepo-engine');
  this.route('hello-engine');
  this.mount('hello-routable-engine');
});

export default Router;
