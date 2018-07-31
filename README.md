# Trade Eth Admin

## Requirements

Following software is required to be installed to use this repo:
 * [NodeJs](https://nodejs.org/en/) >= v8.4.0
 * [Yarn](https://yarnpkg.com/en/docs/install#debian-stable)
 * `yarn install`

## Usage

On first use of this repo, run `npx run build` which will
build docker image.You will have to run `npx run build` each time
you change dependencies in package.json.

Run `npx run` to see all available commands:

clean                           - Removes all build directories and dependencies

lint                            - Runs eslint on current project

build                           - Builds new docker image

test                            - Runs nodejs tests

compile                         - Transpiles files to es5

dev                             - Starts application and all dependent services

To change some configuration run `cp .env.sample .env` and in `.env` file change 
values.
