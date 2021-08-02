//#region Imports

import maxLength from './maxLength';
import onlyNumber from './onlyNumber';

//#endregion

const date = (value) => {
    // value = onlyNumber(value);
    value = maxLength(value, 10);

    if (value.match(/^\d{2}$/) !== null || value.match(/^\d{2}\-\d{2}$/) !== null) {
        value = value + '-';
    }

    return value;
};

export default date;
