//#region Imports

import FieldSelect from 'components/FieldSelect';
import React from 'react';
import USER_FIELDS from 'utils/constants/fields/user';
import USER_LABELS from 'utils/constants/labels/user';

//#endregion

const FieldGender = () => {
    return (
        <FieldSelect
            options={[
                { value: 'MALE', text: 'Masculino' },
                { value: 'FEMALE', text: 'Femininmo' },
                { value: 'OTHER', text: 'Outro' }
            ]}
            name={USER_FIELDS.GENDER}
            label={USER_LABELS.GENDER}
        />
    );
};

export default FieldGender;
