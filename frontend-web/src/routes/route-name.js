export const PUBLIC_ROUTES = {
    AUTHENTICATION: '/authentication'
};

export const PRIVATE_ROUTES = {
    USER: '/user',
    CONDOMINIUM: '/condominium',
    CONSUMPTION: '/consumption'
};

const ROUTE_NAME = {
    ...PUBLIC_ROUTES,
    ...PRIVATE_ROUTES
};

export default ROUTE_NAME;
