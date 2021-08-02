//#region Imports

import ADDRESS_FIELDS from 'utils/constants/fields/address';

//#endregion

const { CEP, PHONE, STREET, NUMBER, COMPLEMENT, NEIGHBORHOOD } = ADDRESS_FIELDS;

const formatSendAddress = (data) => {
    const address = {
        [CEP]: data[CEP],
        [PHONE]: data[PHONE],
        [STREET]: data[STREET],
        [NUMBER]: data[NUMBER],
        [COMPLEMENT]: data[COMPLEMENT],
        [NEIGHBORHOOD]: data[NEIGHBORHOOD]
    };

    delete data[CEP];
    delete data[PHONE];
    delete data[STREET];
    delete data[NUMBER];
    delete data[COMPLEMENT];
    delete data[NEIGHBORHOOD];

    return { ...data, address };
};

export default formatSendAddress;
