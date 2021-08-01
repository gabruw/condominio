//#region Imports

import FieldInput from 'containers/FieldInput/index';
import React, { Fragment } from 'react';
import ADDRESS_FIELDS from 'utils/constants/fields/address';
import ADDRESS_LABELS from 'utils/constants/labels/address';
import cep from 'utils/validations/masks/cep';
import maxLength from 'utils/validations/masks/maxLength';
import onlyNumber from 'utils/validations/masks/onlyNumber';
import phone from 'utils/validations/masks/phone';

//#endregion

const FieldsAddress = () => (
    <Fragment>
        <FieldInput name={ADDRESS_FIELDS.PHONE} label={ADDRESS_LABELS.PHONE} mask={phone} />
        <FieldInput name={ADDRESS_FIELDS.CEP} label={ADDRESS_LABELS.CEP} mask={cep} />

        <FieldInput
            name={ADDRESS_FIELDS.STREET}
            label={ADDRESS_LABELS.STREET}
            mask={(value) => maxLength(value, 255)}
        />

        <FieldInput
            name={ADDRESS_FIELDS.NUMBER}
            label={ADDRESS_LABELS.NUMBER}
            mask={(value) => {
                value = onlyNumber(value);
                return maxLength(value, 10);
            }}
        />

        <FieldInput
            isRequired={false}
            name={ADDRESS_FIELDS.COMPLEMENT}
            label={ADDRESS_LABELS.COMPLEMENT}
            mask={(value) => maxLength(value, 255)}
        />

        <FieldInput
            name={ADDRESS_FIELDS.NEIGHBORHOOD}
            label={ADDRESS_LABELS.NEIGHBORHOOD}
            mask={(value) => maxLength(value, 255)}
        />
    </Fragment>
);

export default FieldsAddress;
