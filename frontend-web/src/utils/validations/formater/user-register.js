//#region Imports

import AUTHETICATION_FIELDS from 'utils/constants/fields/authentication';

//#endregion

const userRegisterFormater = (data) => {
    const authentication = {
        [AUTHETICATION_FIELDS.EMAIL]: data[AUTHETICATION_FIELDS.EMAIL],
        [AUTHETICATION_FIELDS.PASSWORD]: data[AUTHETICATION_FIELDS.PASSWORD]
    };

    delete data[AUTHETICATION_FIELDS.EMAIL];
    delete data[AUTHETICATION_FIELDS.PASSWORD];

    return {
        ...data,
        authentication
    };
};

export default userRegisterFormater;
