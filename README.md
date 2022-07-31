# Portfolio Website
This is my own personal/portfolio website. It's written in Typescript and uses Next.js as with Server-side generation. It's deployed via Netlify. Note that this has only been built in a WSL2 environment so results may vary with different environments.

## Prerequisites
  - node
  - yarn

## Setup
1. Install dependencies with `yarn install`
2. Run the site locally with `yarn dev`.

## Deployment
In order to deploy the site, you'll need specific permissions adding. Contact **Chris Whitlam** to get access. When you create a PR, it will automatically deploy a custom version of the website. 

## Useful Commands
All commands must be prefixed with `yarn` e.g `yarn install`

|Command|Description|
|-------|-----------|
| install | Installs all required dependencies |
| lint:api | Runs linting checks against the api package |
| lint:ui | Runs linting checks against the ui package |
| lint | Runs linting checks against all files and packages |
| test:api | Runs unit tests in the api package |
| test:ui | Runs unit tests in the ui package |
| test | Runs all unit tests in all packages |
| test:watch | Watches for file changes and runs tests against them |
| build:api | Builds the api package |
| build:ui | Builds the ui package |
| build | Builds all packages |
| export:ui | Creates static pages from the ui package |
