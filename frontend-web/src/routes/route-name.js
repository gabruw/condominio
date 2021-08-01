export const PUBLIC_ROUTES = {
    ERROR: '/error',
    AUTHENTICATION: '/authentication',
    USER: {
        REGISTER: '/register'
    }
};

export const PRIVATE_ROUTES = {
    FORM: '/form',
    SECTOR: '/sector',
    CATEGORY: '/category'
};

const ROUTE_NAME = {
    ...PUBLIC_ROUTES,
    ...PRIVATE_ROUTES
};

export default ROUTE_NAME;
