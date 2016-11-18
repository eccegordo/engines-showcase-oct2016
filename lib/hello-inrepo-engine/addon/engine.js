import Engine from 'ember-engines/engine';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';

const modulePrefix = 'hello-inrepo-engine';
const Eng = Engine.extend({
  modulePrefix,
  Resolver
});

loadInitializers(Eng, modulePrefix);

export default Eng;
