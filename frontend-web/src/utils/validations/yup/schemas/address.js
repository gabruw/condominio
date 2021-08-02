//#region Imports

import ADDRESS_FIELDS from 'utils/constants/fields/address';
import ADDRESS_LABELS from 'utils/constants/labels/address';
import emptyStringToUndefined from 'utils/validations/yup/conversors/emptyStringToUndefined';
import yup from '../yup';

//#endregion

const addressSchema = yup.object().shape({
    [ADDRESS_FIELDS.COMPLEMENT]: yup.string().max(255).label(ADDRESS_LABELS.COMPLEMENT),
    [ADDRESS_FIELDS.CEP]: yup.string().required().min(9).max(9).label(ADDRESS_LABELS.CEP),
    [ADDRESS_FIELDS.PHONE]: yup.string().required().min(14).max(14).label(ADDRESS_LABELS.PHONE),
    [ADDRESS_FIELDS.STREET]: yup.string().required().min(1).max(255).label(ADDRESS_LABELS.STREET),
    [ADDRESS_FIELDS.NEIGHBORHOOD]: yup.string().required().min(1).max(255).label(ADDRESS_LABELS.NEIGHBORHOOD),
    [ADDRESS_FIELDS.NUMBER]: yup
        .number()
        .required()
        .transform(emptyStringToUndefined)
        .min(0)
        .max(999999999)
        .label(ADDRESS_LABELS.NUMBER)
});

export default addressSchema;
