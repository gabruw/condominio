//#region Imports

import AUTHETICATION_FIELDS from 'utils/constants/fields/authentication';
import AUTHETICATION_LABELS from 'utils/constants/labels/authentication';
import yup from '../yup';

//#endregion

const authenticationSchema = yup.object().shape({
    [AUTHETICATION_FIELDS.PASSWORD]: yup.string().required().min(8).max(40).label(AUTHETICATION_LABELS.PASSWORD),
    [AUTHETICATION_FIELDS.EMAIL]: yup.string().email().required().min(6).max(80).label(AUTHETICATION_LABELS.EMAIL)
});

export default authenticationSchema;
