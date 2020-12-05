# Trivia Tree

!["walkthrough of app"](https://github.com/meghein/trivia-tree/blob/master/docs/trivia.gif)

__A client-side SPA (single-page app) built with ReactJS for quick and simple quiz fun across platforms. The app is deployed using CircleCI and Netlify.__

[To view live version of the app, click here](https://trivia-tree.netlify.app/ "Netlify deployment")

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `yarn install` (or `npm` if that is preferred).
3. Start the web server using the `yarn start` command.
4. To run tests: `yarn test`, `yarn run coverage`, `yarn run cypress`

## Project Stack

React, HTML, SASS, JavaScript

__Testing:__ Jest, Cypress

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

- Generates 10 multiple choice questions from open source api
- Questions as well as corresponding answers are given in random order for each entry
- Each question validates upon submission as well as a final score generated at the end of the quiz
- Reactive progress bar that uses a simple css animation to log quiz session
- Responsive design

### Technical Details

The project was originally designed for consideration in [Tandem's Apprenticeship Program](https://madeintandem.com/about/apprenticeship-program/) and built with a provided local object database. For workflow and commit reference please visit the original repo [here](https://github.com/meghein/tandem-test).

The project was cloned in order to continue building upon the features available, such as replacing the database with an open source trivia API, without altering the original product.

### Copyright

MIT License 2020, Meghan Hein
