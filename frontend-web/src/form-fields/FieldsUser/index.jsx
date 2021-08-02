//#region Imports

import FieldInput from 'components/FieldInput';
import React, { Fragment } from 'react';
import AUTHENTICATION_FIELDS from 'utils/constants/fields/authentication';
import USER_FIELDS from 'utils/constants/fields/user';
import AUTHENTICATION_LABELS from 'utils/constants/labels/authentication';
import USER_LABELS from 'utils/constants/labels/user';
import USER_PLACEHOLDERS from 'utils/constants/placeholders/user';
import cell from 'utils/validations/masks/cell';
import cpf from 'utils/validations/masks/cpf';
import maxLength from 'utils/validations/masks/maxLength';
import FieldCondomonium from './FieldCondomonium/index';
import FieldGender from './FieldGender';

//#endregion

const FieldsUser = () => (
    <Fragment>
        <FieldInput name={USER_FIELDS.NAME} label={USER_LABELS.NAME} mask={(value) => maxLength(value, 50)} />
        <FieldInput name={USER_FIELDS.UNITY} label={USER_LABELS.UNITY} mask={(value) => maxLength(value, 10)} />

        <FieldInput name={USER_FIELDS.CPF} label={USER_LABELS.CPF} mask={cpf} />
        <FieldInput name={USER_FIELDS.CELL} label={USER_LABELS.CELL} mask={cell} />

        <FieldGender />
        <FieldCondomonium />

        <FieldInput
            type='email'
            name={AUTHENTICATION_FIELDS.EMAIL}
            label={AUTHENTICATION_LABELS.EMAIL}
            placeholder={USER_PLACEHOLDERS.EMAIL}
        />

        <FieldInput
            type='password'
            name={AUTHENTICATION_FIELDS.PASSWORD}
            label={AUTHENTICATION_LABELS.PASSWORD}
            placeholder={USER_PLACEHOLDERS.PASSWORD}
        />
    </Fragment>
);

export default FieldsUser;
