import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

import { routes } from './routes';
import logo from '../logo.svg';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';


export const Navigation = () => {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {
                routes.map((route, i) => {
                  return (
                    <li key={`${i}${route.name}`}>
                      <NavLink to={route.to} activeClassName="nav-active" exact>{route.name}</NavLink>
                    </li>
                  )
                })
              }
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {
              routes.map((route, i) => {
                return (
                  <Route key={`${i}ruta${route.name}`} path={route.path} component={route.Component} />
                )
              })
            }
            <Route path="/">
              <h1>Hello</h1>
            </Route>

            <Redirect to="/lazy1" />
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}