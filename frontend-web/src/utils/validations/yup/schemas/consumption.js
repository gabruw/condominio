//#region Imports

import DATE_FILTER_FIELDS from 'utils/constants/fields/date-filter';
import DATE_FILTER_LABELS from 'utils/constants/labels/date-filter';
import yup from '../yup';

//#endregion

const consumptionSchema = yup.object().shape({
    [DATE_FILTER_FIELDS.END_DATE]: yup.string().required().label(DATE_FILTER_LABELS.END_DATE),
    [DATE_FILTER_FIELDS.START_DATE]: yup.string().required().label(DATE_FILTER_LABELS.START_DATE)
});

export default consumptionSchema;
