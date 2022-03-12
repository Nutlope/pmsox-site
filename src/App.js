import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './Routes';
import ReactGA from 'react-ga';
import {
  load as loadIntercom,
  boot as bootIntercom,
  update as updateIntercom,
} from './intercom';

import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'leaflet/dist/leaflet.css';
import 'assets/css/index.css';
import 'swiper/css/swiper.min.css';
import 'aos/dist/aos.css';

const browserHistory = createBrowserHistory();

browserHistory.listen(location => {
  // Calls Intercom('update') on every page change
  updateIntercom();
});

const App = () => {
  loadIntercom();
  bootIntercom();
  ReactGA.initialize('UA-215866314-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <Router history={browserHistory}>
      <Routes />
    </Router>
  );
};

export default App;
