import { NavLink, Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages/';

export const Navigation = () => {

    const { path, url } = useRouteMatch();

    return (
        <div>
            <h2>LazyLayout Pages</h2>

            <ul>
                <li>
                    <NavLink to={`${url}/lazy1`} activeClassName="nav-active" exact>Lazy page one</NavLink>
                </li>
                <li>
                    <NavLink to={`${url}/lazy2`} activeClassName="nav-active" exact>Lazy page two</NavLink>
                </li>
                <li>
                    <NavLink to={`${url}/lazy3`} activeClassName="nav-active" exact>Lazy page thre</NavLink>
                </li>
            </ul>

            <Switch>

                <Route exact path={`${path}/lazy1`} component={LazyPage1} />
                <Route exact path={`${path}/lazy2`} component={LazyPage2} />
                <Route exact path={`${path}/lazy3`} component={LazyPage3} />

                <Redirect to={`${path}/lazy1`} />
            </Switch>
        </div>
    )
}
