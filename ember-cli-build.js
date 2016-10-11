/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import("bower_components/daemonite-material/js/base.js", { type: 'vendor' });
  app.import("bower_components/daemonite-material/js/project.js", { type: 'vendor' });
  app.import('bower_components/daemonite-material/css/fonts/MaterialIcons-Regular.eot', { destDir: 'assets/fonts' });
  app.import('bower_components/daemonite-material/css/fonts/MaterialIcons-Regular.ijmap', { destDir: 'assets/fonts' });
  app.import('bower_components/daemonite-material/css/fonts/MaterialIcons-Regular.svg', { destDir: 'assets/fonts' });
  app.import('bower_components/daemonite-material/css/fonts/MaterialIcons-Regular.ttf', { destDir: 'assets/fonts' });
  app.import('bower_components/daemonite-material/css/fonts/MaterialIcons-Regular.woff', { destDir: 'assets/fonts' });
  app.import('bower_components/daemonite-material/css/fonts/MaterialIcons-Regular.woff2', { destDir: 'assets/fonts' });

  // example images from material project
  app.import('bower_components/daemonite-material/images/users/avatar-001.jpg', { destDir: '/images/users' });
  app.import('bower_components/daemonite-material/images/samples/landscape.jpg', { destDir: '/images/samples' });
  app.import('bower_components/daemonite-material/images//samples/portrait.jpg', { destDir: '/images/samples' });


  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
