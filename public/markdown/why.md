### Why Engines?

Engines allow you to compartmentalize discrete areas of your application into isolated units.

Each engine can be plugged into host application or run independently.

#### Advantages

- larger teams can independently more easily
- clear architectural boundaries and concerns
- iterate independently of host application
- conditionally and lazily load engines when needed (good for mobile)
- test and encapsulate concerns within scope of engine
- share and reuse engines across projects

#### Disadvantages

- can require more planning than organic monolith
- sharing some global dependencies and services require additional configuration
 
