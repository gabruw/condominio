//#region Imports

import CONSUMPTION_FIELDS from 'utils/constants/fields/consumption';
import CONSUMPTION_LABELS from 'utils/constants/labels/consumption';
import USER_FIELDS from '../fields/user';
import USER_LABELS from '../labels/user';

//#endregion

export const CONSUMPTION_INDIVIDUAL_REPORT_COLMUNS = [
    { label: CONSUMPTION_LABELS.READ_DATE, field: CONSUMPTION_FIELDS.READ_DATE },
    { label: 'Consumo (litros)', field: CONSUMPTION_FIELDS.REVISION }
];

export const CONSUMPTION_GENERAL_REPORT_COLMUNS = [
    { label: USER_LABELS.UNITY, field: USER_FIELDS.UNITY },
    { label: 'Consumo (litros)', field: 'total' }
];
