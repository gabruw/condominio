//#region Imports

import FieldInput from 'components/FieldInput';
import React from 'react';
import CONDOMINIUM_FIELDS from 'utils/constants/fields/condominium';
import CONDOMINIUM_LABELS from 'utils/constants/labels/condominium';

//#endregion

const FieldsCondominiun = () => <FieldInput name={CONDOMINIUM_FIELDS.NAME} label={CONDOMINIUM_LABELS.THIS} />;

export default FieldsCondominiun;
