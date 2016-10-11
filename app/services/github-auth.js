import Ember from 'ember';
import ENV from "engines-showcase-oct2016/config/environment";

export default Ember.Service.extend({
  token: ENV.GITHUB_PERSONAL_TOKEN
});
