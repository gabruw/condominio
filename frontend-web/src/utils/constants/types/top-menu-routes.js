//#region Imports

import { PRIVATE_ROUTES } from 'routes/route-name';

//#endregion

const TOP_MENU_ROUTES = [
    {
        name: 'Usuários',
        route: PRIVATE_ROUTES.USER
    },
    {
        name: 'Condominios',
        route: PRIVATE_ROUTES.CONDOMINIUM
    }
];

export default TOP_MENU_ROUTES;
