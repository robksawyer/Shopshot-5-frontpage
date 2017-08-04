import React from 'react';
import ReactDOMServer from 'react-dom/server'
import { match } from 'react-router';
import { Provider } from 'react-redux';
import { ReduxAsyncConnect, loadOnServer } from 'redux-connect';
import configureStore from '../../../client/redux/configureStore';
import renderHTML from './helpers/render_html';
import Routes from '../../../client/routes';

const reactModule = (req, res, next) => {

    const store = configureStore();
    const state = store.getState();

    // This setting is required for material-ui server-side rendering
    //state.theme.userAgent = req.headers['user-agent'];

    // @see https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/match.md
    // @see https://github.com/makeomatic/redux-connect
    // 1. load data
    match({ routes: Routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (redirectLocation) {
        return res.redirect(301, redirectLocation.pathname + redirectLocation.search);
      }
      if (error) {
        return next({
          message: error.message,
          status: 500,
          success: false
        });
      }

      if (!renderProps) {
        return next();
      }

      loadOnServer({
        ...renderProps,
        store
      }).then(() => {

        // 2. use `ReduxAsyncConnect` instead of `RoutingContext` and pass it `renderProps`
        const componentHTML = ReactDOMServer.renderToString(
          <Provider store={store} key="provider">
            <ReduxAsyncConnect {...renderProps} />
          </Provider>
        );

        // 3. render the Redux initial data into the server markup
        var pageTitle = 'Keystone React Template';
        const html = renderHTML(pageTitle, componentHTML, store.getState());
        res.send(html);
      });
    });
};

export default reactModule;
