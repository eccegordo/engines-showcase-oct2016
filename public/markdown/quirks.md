### Quirks

Things you might want to consider.

#### Shared dependencies

Depending of the behavior of the shared dependency it may or may not make sense to share between host app and engine. When using services like the ember data store you may need to think carefully about the use case and what it means to have the `store` defined in two places or even extended by the engine. Beware of accidental race conditions.

#### How isolated is isolated?
Engines strive to isolate critical parts of your app such as the `application container`, and maintain clear isolation and namespacing. There can still be areas where your expectation of isolation might not be intuitively obvious.

One example where this can come up is with generators that are not engine aware.

Compare these two commits in a contrived example project. The first commit creates an
`The Broccoli Plugin: [TemplateCompiler]` error.

[[BROKEN] ember g route about -ir collision-engine](https://github.com/eccegordo/collision-example-host/commit/a76486c16a816fed36315c24ad06f91607ad198e)

[[FIX] remove generated template about.js](https://github.com/eccegordo/collision-example-host/commit/5af331c128cbd9ad578d076dcdc2d77ff08f3c72)

The fix is to remove the duplicate template inside the engine.
`lib/collision-engine/app/templates/about.js`

This file was automatically created by generator command

#### Global state and behavior

Somethings like CSS and other assets are truly global. You can have styles in your host app and styles in your engine. Beware of unintended side effects.

You may want to keep you engines relatively free of CSS styles, and delegate that responsibility to the host application's stylesheet.

#### Eager Loading

The default behavior of engines is to eager load all the engines. This means all the code will merged together when the booted up. Lazy loading of engines is still an experimental feature (as of October 2016)

[See ember engines issue 154](https://github.com/dgeb/ember-engines/issues/154)
