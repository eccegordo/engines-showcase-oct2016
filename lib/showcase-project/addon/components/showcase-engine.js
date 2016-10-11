import Ember from 'ember';
import layout from '../templates/components/showcase-engine';
const { computed } = Ember;
export default Ember.Component.extend({
  layout,
  repoPath: null,
  repo: computed('repoPath', function() {
    var repoPath = this.get('repoPath');
    if (repoPath) {
      return repoPath;
    } else {
      return null;
    }
  }),

});
