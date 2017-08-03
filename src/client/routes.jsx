import React from 'react';
import { Router, Match } from 'react-router';
import { ReduxAsyncConnect } from 'redux-connect';
import App from './components/App';


const Routes = (
  <Router render={(props) => <ReduxAsyncConnect {...props}/>}>
    <div>
      <Match path='/' component={App}></Match>
    </div>
  </Router>
);

export default Routes;
