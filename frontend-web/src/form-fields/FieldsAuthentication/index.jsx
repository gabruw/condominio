//#region Imports

import FieldInput from 'components/FieldInput';
import React, { Fragment } from 'react';
import AUTHENTICATION_FIELDS from 'utils/constants/fields/authentication';
import AUTHENTICATION_LABELS from 'utils/constants/labels/authentication';
import AUTHENTICATION_PLACEHOLDERS from 'utils/constants/placeholders/authentication';

//#endregion

const FieldsAuthentication = () => (
    <Fragment>
        <FieldInput
            type='email'
            name={AUTHENTICATION_FIELDS.EMAIL}
            label={AUTHENTICATION_LABELS.EMAIL}
            placeholder={AUTHENTICATION_PLACEHOLDERS.EMAIL}
        />

        <FieldInput
            type='password'
            name={AUTHENTICATION_FIELDS.PASSWORD}
            label={AUTHENTICATION_LABELS.PASSWORD}
            placeholder={AUTHENTICATION_PLACEHOLDERS.PASSWORD}
        />
    </Fragment>
);

export default FieldsAuthentication;
