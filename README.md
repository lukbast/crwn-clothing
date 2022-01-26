# crwn-clothing

This repo contains source code for project created based on course The Complete React Developer by Andrei Neagoie and Yihua Zhang.

It's E-commerce website created in React and hosted on Heroku using Node.JS server made in Express. 

## How I can see it?

It's deployed on Heroku [here](https://my-app-crwn-live.herokuapp.com). Since it's hosted under a free plan it may take 1-2 minutes to wake sleeping server after some time of inactivity.

## Breaking down the repo

Main folder contains only short script to run the server. Main dish is inside client folder. 

#### [client/src/assets](https://github.com/lukbast/crwn-clothing/tree/master/client/src/assets) - images
#### [client/src/components](https://github.com/lukbast/crwn-clothing/tree/master/client/src/components) - folder structure that holds each component
#### [client/src/firebase](https://github.com/lukbast/crwn-clothing/tree/master/client/src/firebase) - contains code that conects app to firebase
#### [client/src/pages](https://github.com/lukbast/crwn-clothing/tree/master/client/src/pages) - biggest components that are rendered by React-Router
#### [client/src/redux](https://github.com/lukbast/crwn-clothing/tree/master/client/src/redux) - redux's state managment code
#### [client/src](https://github.com/lukbast/crwn-clothing/tree/master/client/src) - except for folders listed above it contains app.jsx and index.jsx that are starting points of the client. Also in there are tests and service workers scripts.
#### [client/public](https://github.com/lukbast/crwn-clothing/tree/master/client/public) - icons that are displayed in various places in browser.
