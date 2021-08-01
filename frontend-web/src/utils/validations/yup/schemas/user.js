//#region Imports

import USER_FIELD from 'utils/constants/fields/user';
import USER_LABEL from 'utils/constants/labels/user';
import yup from '../yup';

//#endregion

const userSchema = yup.object().shape({
    [USER_FIELD.NAME]: yup.string().required().min(1).max(255).label(USER_LABEL.NAME),
    [USER_FIELD.SECTOR]: yup.string().required().min(1).max(30).label(USER_LABEL.SECTOR)
});

export default userSchema;
