# Keystone-React-Redux for [MERN](http://mern.io/) projects.

This package uses Webpack and Babel to run Keystone, React and Redux. The project has also been modified to work on Heroku.

Don't forget to change names for the ones in your project!

## DEMO: [You can find it here](https://krt-back.herokuapp.com/)

### How to use:
1. `yarn install`.
2. `yarn run dev` and `yarn run front:dev`.

### Configuration
1. Copy `.env.sample` to `.env` before running the package.
1. Set `MONGO_URI` in `.env.sample` before running the package.

### Scripts

* `yarn run build` Build client JS into build folder.
* `yarn run front:dev` Webpack watchs for changes in your React files.
* `yarn start` Production mode.
* `yarn run dev` Run server. Dev mode.

## See your work

To see the app, visit <http://0.0.0.0:3000> in your favorite browser.


## Out-of-box:

![](https://github.com/Metnew/react-semantic.ui-starter/blob/for-gh/screen.gif)

[![Build Status](https://travis-ci.org/Metnew/react-semantic.ui-starter.svg?branch=master)](https://travis-ci.org/Metnew/react-semantic.ui-starter)
[![codecov](https://codecov.io/gh/Metnew/react-semantic.ui-starter/branch/master/graph/badge.svg)](https://codecov.io/gh/Metnew/react-semantic.ui-starter)
[![bitHound Dependencies](https://www.bithound.io/github/Metnew/react-semantic.ui-starter/badges/dependencies.svg)](https://www.bithound.io/github/Metnew/react-semantic.ui-starter/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/Metnew/react-semantic.ui-starter/badges/devDependencies.svg)](https://www.bithound.io/github/Metnew/react-semantic.ui-starter/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/Metnew/react-semantic.ui-starter/badges/code.svg)](https://www.bithound.io/github/Metnew/react-semantic.ui-starter)
[![bitHound Overall Score](https://www.bithound.io/github/Metnew/react-semantic.ui-starter/badges/score.svg)](https://www.bithound.io/github/Metnew/react-semantic.ui-starter)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### What is it?
Production-ready, performance-first, optimized, robust, fully-featured boilerplate/example with **Server-side rendering** and **lazy-loading** for your **new Progressive Web App**.

#### Lighthouse result - [you can find it here](https://googlechrome.github.io/lighthouse/viewer/?gist=cd19fc335d4dc2abfbba10ee550bd0c8)
SPOILER: 97/100. It might be better/worse in your browser.

#### Includes:
- **[React](https://facebook.github.io/react/)** and **[Redux](http://redux.js.org/)**
- **SASS**, **[PostCSS](https://github.com/postcss/postcss)**,  and **[styled-components](https://github.com/styled-components/styled-components)** support.
- **[React-Router v4](https://github.com/ReactTraining/react-router)** + **[React-Router-Redux v5](https://github.com/reactjs/react-router-redux)**
- **[JSON-server](https://github.com/typicode/json-server)** - mock db.
- **[rapscallion](https://github.com/FormidableLabs/rapscallion)** - async server-side rendering.
- **[ESDoc](https://github.com/esdoc/esdoc)** - docs generator.
- **[Redux-thunk](https://github.com/gaearon/redux-thunk)**,  **[Redux-Devtools-Extension](https://github.com/zalmoxisus/redux-devtools-extension)**
- **[Fetch polyfill](https://github.com/github/fetch)** and **[normalizr](https://github.com/paularmstrong/normalizr)**(api response normalization)
- **[Semantic-ui-react](http://react.semantic-ui.com/)** - UI components.
- **[Store2](https://github.com/nbubna/store)** and **[js-cookie](https://github.com/js-cookie/js-cookie)** - LocalStorage and cookies.
- **[Webpack 3](https://webpack.js.org)**:
    - Babel (stage-0),
    - **HMR**, devServer, hotMiddleware,
    - i18n support with **[i18n-webpack-plugin](https://github.com/webpack-contrib/i18n-webpack-plugin)**
    - Check your code with **[Eslint](https://github.com/eslint/eslint)** and **[Stylelint](https://github.com/stylelint/stylelint)** (that you can uncomment inside `postcss.config.js`)
- **[Jest](https://facebook.github.io/jest/)** and **[Enzyme](https://github.com/airbnb/enzyme)** - awesome libraries for testing.
- **[why-did-you-update](https://github.com/garbles/why-did-you-update)** and **[React-Addons-Perf](https://facebook.github.io/react/docs/perf.html)** for better performance optimization.
- **[Lodash](https://lodash.com/)** - is a dependency of Semantic-ui-react.
- **[Offline-plugin](https://github.com/NekR/offline-plugin)**, **[favicons-webpack-plugin](https://github.com/jantimon/favicons-webpack-plugin)**,  **[webpack-manifest-plugin](https://github.com/danethurber/webpack-manifest-plugin)** and **[preload-webpack-plugin](https://github.com/GoogleChrome/preload-webpack-plugin)**, **[webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)**, **[compression-webpack-plugin](https://github.com/webpack-contrib/compression-webpack-plugin)**, **[webpack-common-shake](https://github.com/indutny/webpack-common-shake)** for your new awesome app.
- [And more tools for building and testing...](https://github.com/Metnew/react-semantic.ui-starter/blob/master/package.json)
