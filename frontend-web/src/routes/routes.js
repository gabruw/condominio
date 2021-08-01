//#region Imports

import Authentication from 'views/authentication';
import Sector from 'views/sector';
import UserRegister from 'views/user/register';
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
        path: ROUTE_NAME.SECTOR,
        component: Sector
    },
    {
        exact: true,
        path: ROUTE_NAME.AUTHENTICATION,
        component: Authentication
    },
    {
        exact: true,
        path: ROUTE_NAME.USER.REGISTER,
        component: UserRegister
    },
    {
        path: '*',
        exact: true,
        component: Authentication
    }
];

export default ROUTES;
