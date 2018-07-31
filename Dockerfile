FROM node:carbon-alpine

WORKDIR /usr/app

# Install node dependencies - done in a separate step so Docker can cache it.
COPY yarn.lock .
COPY package.json .

RUN yarn install --frozen-lockfile

COPY . .

USER node