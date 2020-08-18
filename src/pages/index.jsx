import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';

const Home = lazy(() => import('./Home'));
const Admin = lazy(() => import('./Admin'));
const Map = lazy(() => import('./Map'));

function App() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/map">
              <Map />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
