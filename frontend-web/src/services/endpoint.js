import buildQueryParams from 'utils/functions/buildQueryParams';

const ENDPOINT = {
    BASE: 'http://localhost:8877',
    SECURITY: {
        LOGIN: 'security/login'
    },
    USER: {
        THIS: 'user',
        INCLUDE_RESIDENT: 'user/resident',
        INCLUDE_ADMINISTRATOR: 'user/administrator'
    },
    CONDOMINIUM: {
        THIS: 'condominium',
        OPTIONS: 'condominium/options',
        FIND_BY_ID: (id) => `condominium?${buildQueryParams({ id })}`,
        FIND_BY_NAME: (name) => `condominium?${buildQueryParams({ name })}`,
        FIND_ALL: ({ page, size, order, direction }) =>
            `condominium?${buildQueryParams({ page, size, order, direction })}`
    },
    CONSUMPTION: {
        THIS: 'consumption',
        FIND_BY_ID: (id) => `consumption?${buildQueryParams({ id })}`,
        FIND_BY_UNITY: (unity) => `condominium?${buildQueryParams({ unity })}`
    }
};

export default ENDPOINT;
