### How To Create an Engine

Create an addon project in ember cli (with ember.js 2.8 or greater)

```
ember addon my-engine-name
```

Install engines support
```
ember install ember-engines
```

Create an `engine.js` file inside addon

```
touch addon/engine.js
```

Contents of `addon/engine.js`
```
import Engine from 'ember-engines/engine';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';

const modulePrefix = 'my-engine-name';
const Eng = Engine.extend({
  modulePrefix,
  Resolver
});

loadInitializers(Eng, modulePrefix);

export default Eng;

```

Engine can be routeless or routable. If routable, create a routes definition.

```
touch addon/routes.js
```

Contents of `addon/routes.js`

```
import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  // Define your specific routes
  // this.route('first-route');
  // this.route('second-route');
  // etc...
});
```

Ensure htmlbars is listed as a dependency for compiling any templates.

Inside `package.json` add the following.

```
"dependencies": {
  "ember-cli-htmlbars": "^1.0.3"
}
```

Configure `index.js` in project root.

```
/* jshint node:true */
var EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'my-engine-name',
  lazyLoading: false
});
```

Configure `config/environment.js` in project.

```
/* jshint node:true */
'use strict';

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'my-engine-name',
    environment: environment
  }

  return ENV;
};

```

If you are sharing dependencies between host app and engine you need to declare these dependencies explicitly.

For example you may have a `service` in the host that you want to use inside the engine.

If so, your `app/app.js` file in your host app would look something like this (note the dependencies object):

```
import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  dependencies: {
    services: [
      'my-service'
    ]
  }
});

loadInitializers(App, config.modulePrefix);

export default App;
```

For more technical details see the

[Ember Engines Readme](https://github.com/dgeb/ember-engines/blob/master/README.md)

[Ember Engines Guides](https://github.com/dgeb/ember-engines/blob/master/guides/01-introduction.md)
