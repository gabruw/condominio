//#region Imports

import FieldInput from 'components/FieldInput';
import React, { Fragment } from 'react';
import AUTHENTICATION_FIELDS from 'utils/constants/fields/authentication';
import USER_FIELDS from 'utils/constants/fields/user';
import AUTHENTICATION_LABELS from 'utils/constants/labels/authentication';
import USER_LABELS from 'utils/constants/labels/user';
import USER_PLACEHOLDERS from 'utils/constants/placeholders/user';
import FieldCondomonium from './FieldCondomonium/index';

//#endregion

const FieldsUser = () => (
    <Fragment>
        <FieldInput type='text' name={USER_FIELDS.NAME} label={USER_LABELS.NAME} placeholder={USER_PLACEHOLDERS.NAME} />

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
