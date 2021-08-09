export const PUBLIC_ROUTES = {
    AUTHENTICATION: '/authentication'
};

export const PRIVATE_ROUTES = {
    USER: '/user',
    CONDOMINIUM: '/condominium',
    CONSUMPTION_GENERAL_REPORT: '/consumption-general-report',
    CONSUMPTION_INDIVIDUAL_REPORT: '/consumption-individual-report'
};

const ROUTE_NAME = {
    ...PUBLIC_ROUTES,
    ...PRIVATE_ROUTES
};

export default ROUTE_NAME;
