//#region Imports

import CONSUMPTION_FIELDS from 'utils/constants/fields/consumption';
import CONSUMPTION_LABELS from 'utils/constants/labels/consumption';

//#endregion

const CONSUMPTION_COLMUNS = [
    { label: CONSUMPTION_LABELS.READ_DATE, field: CONSUMPTION_FIELDS.READ_DATE },
    { label: 'Consumo (litros)', field: CONSUMPTION_FIELDS.READ }
];

export default CONSUMPTION_COLMUNS;
