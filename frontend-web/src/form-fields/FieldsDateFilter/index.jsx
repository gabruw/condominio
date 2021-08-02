//#region Imports

import FieldInput from 'components/FieldInput';
import React, { Fragment } from 'react';
import DATE_FILTER_FIELDS from 'utils/constants/fields/date-filter';
import DATE_FILTER_LABELS from 'utils/constants/labels/date-filter';
import date from 'utils/validations/masks/date';

//#endregion

const FieldsDateFilter = () => (
    <Fragment>
        <div style={{ width: '30%' }}>
            <FieldInput name={DATE_FILTER_FIELDS.START_DATE} label={DATE_FILTER_LABELS.START_DATE} mask={date} />
        </div>

        <div style={{ width: '30%' }}>
            <FieldInput name={DATE_FILTER_FIELDS.END_DATE} label={DATE_FILTER_LABELS.END_DATE} mask={date} />
        </div>
    </Fragment>
);

export default FieldsDateFilter;
