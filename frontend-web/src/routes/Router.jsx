//#region Imports

import TopMenu from 'containers/TopMenu';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ROUTES from './routes';

//#endregion

const AppRoutes = () => (
    <BrowserRouter>
        <TopMenu />
        <Switch>
            {ROUTES.map(({ path, exact, component }, index) => (
                <Route key={index} path={path} exact={exact} component={component} />
            ))}
        </Switch>
    </BrowserRouter>
);

export default AppRoutes;
