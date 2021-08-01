//#region Imports

import CONDOMINIUM_FIELD from 'utils/constants/fields/condominium';
import CONDOMINIUM_LABEL from 'utils/constants/labels/condominium';
import yup from '../yup';

//#endregion

const condominiumSchema = yup.object().shape({
    [CONDOMINIUM_FIELD.NAME]: yup.string().required().min(1).max(30).label(CONDOMINIUM_LABEL.NAME)
});

export default condominiumSchema;
