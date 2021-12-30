import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import WithLayout from 'WithLayout';
import { Main as MainLayout } from './layouts';

import {
  ContactPage as ContactPageView,
  WebBasic as WebBasicView,
  About as AboutView,
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={WebBasicView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/about"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={AboutView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/contact-page"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={ContactPageView}
            layout={MainLayout}
          />
        )}
      />
      <Redirect to="/not-found-cover" />
    </Switch>
  );
};

export default Routes;
