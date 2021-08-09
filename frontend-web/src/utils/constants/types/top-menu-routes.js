//#region Imports

import { PRIVATE_ROUTES } from 'routes/route-name';

//#endregion

const TOP_MENU_ROUTES = [
    {
        name: 'Usuários',
        route: PRIVATE_ROUTES.USER,
        auth: 'ADMINISTRATOR'
    },
    {
        name: 'Condominios',
        route: PRIVATE_ROUTES.CONDOMINIUM,
        auth: 'ADMINISTRATOR'
    },
    {
        name: 'Consumo Individual',
        route: PRIVATE_ROUTES.CONSUMPTION_INDIVIDUAL_REPORT,
        auth: null
    },
    {
        name: 'Consumo Geral',
        route: PRIVATE_ROUTES.CONSUMPTION_GENERAL_REPORT,
        auth: 'ADMINISTRATOR'
    }
];

export default TOP_MENU_ROUTES;
