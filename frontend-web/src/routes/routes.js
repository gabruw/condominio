//#region Imports

import Authentication from 'views/authentication';
import Condominium from 'views/condominium';
import Consumption from 'views/consumption';
import User from 'views/user';
import ROUTE_NAME from './route-name';

//#endregion

const ROUTES = [
    {
        path: '/',
        exact: true,
        component: Authentication
    },
    {
        exact: true,
        path: ROUTE_NAME.CONDOMINIUM,
        component: Condominium
    },
    {
        exact: true,
        path: ROUTE_NAME.CONSUMPTION,
        component: Consumption
    },
    {
        exact: true,
        path: ROUTE_NAME.AUTHENTICATION,
        component: Authentication
    },
    {
        exact: true,
        path: ROUTE_NAME.USER,
        component: User
    },
    {
        path: '*',
        exact: true,
        component: Authentication
    }
];

export default ROUTES;
