import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('presentation', function() {
    this.route('why');
    this.route('how');
    this.route('quirks');
    this.route('more');
    this.route('what');
  });
  this.route('hello-inrepo-engine');
  this.route('hello-engine');
  this.mount('hello-routable-engine');
});

export default Router;
