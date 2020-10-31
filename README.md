# The Tandem Test

[![desktop version](https://github.com/meghein/tandem-test/blob/master/docs/desktop.gif?raw=true)](https://github.com/meghein/tandem-test)

__A client-side SPA (single-page app) built with ReactJS for quick and simple quiz fun across platforms. The app is deployed using CircleCI and Netlify.__

[To view live version of the app, click here](https://the-tandem-test.netlify.app/ "Netlify deployment")

## Getting Started
1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `yarn install` or `npm install` command.
3. Start the web server using the `yarn start` or `npm start` command.
4. To run tests: `yarn test`, `yarn run coverage`, `yarn run cypress`

## Project Stack
React, JSX, HTML, SASS, JavaScript

__Testing:__ Jest, Cypress ![code coverage](https://badgen.net/badge/coverage/95.83%25/green)

## Dependencies
- babel
- cypress
- fontawesome
- jest-dom
- node-sass
- prop-types
- react
- react-dom
- react-scripts

## Project Features
- Generates 10 multiple choice questions from an in memory object
- Questions as well as corresponding answers are given in random order for each entry
- Each question validates upon submission as well as a final score generated at the end of the quiz
- Reactive progress bar that uses a simple css animation to log quiz session
- Responsive design

### Technical Details
The project was designed for consideration in [Tandem's Apprenticeship Program](https://madeintandem.com/about/apprenticeship-program/).

It was built in React with a provided local object database.

### Copyright
MIT License 2020, Meghan Hein