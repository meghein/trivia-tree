[![code coverage](https://badgen.net/badge/coverage/95%83/green)](https://github.com/meghein/tandem-test)

# The Tandem Test

A client-side SPA (single-page app) built with ReactJS for quick and simple quiz fun across platforms. The app is deployed using CircleCI and Netlify.



### GamePlay Demo

[![desktop version](https://github.com/meghein/tandem-test/blob/master/docs/desktop.gif?raw=true)](https://github.com/meghein/tandem-test)
[![responsive design](https://github.com/meghein/tandem-test/blob/master/docs/responsive.gif?raw=true)](https://github.com/meghein/tandem-test)

### Deployment



### Technical Details

The app is built using Node.js. Individual components are implemented using classes, an efficient algorithm is used to check if the ship is placeable on the board or not. Also, the app makes use of the following NPM packages for a great UX experience:

1. `figlet` for the retro game font at the beginning of the game
2. `chalk` for colourful fonts
3. `prompts` for interactive user input

The app is linted using `eslint` and uses `jest` for comprehensive mock game-play testing (current test coverage is 88%).

### Salient Features

- Interactive user input allowing to select from the list of options
- Improved validation of user input without using loops and faster feedback to the user of invalid input.
- Allow players to have names.
- Print gameboard at every round.
- Let the user know if they already hit a spot before.
- Print victory message with a final view of the battlefield with the location of ships (boards of both player's)

### Gameplay Features

- Two Player game
- Two boards (one for each player)
- 1 Ship (length of 3) - can be placed vertical or horizontally (fully extensible to allow for more ships of various sizes)
- Ask the location for placement of Ship for each player.
- Fire a single shot per turn (Hit, Miss, or if the ship has been Sunk (3 hits) then register a “you sunk enemy battleship”)
- game ends when one player sunk other player's ship

### Installation



### Testing



## Copyright

MIT License 2020, Meghan Hein