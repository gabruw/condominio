//#region Imports

import FieldSelect from 'components/FieldSelect';
import React, { useEffect, useState } from 'react';
import useCondominiumContext from 'storages/condominium/context';
import CONDOMINIUM_FIELDS from 'utils/constants/fields/condominium';
import CONDOMINIUM_LABELS from 'utils/constants/labels/condominium';

//#endregion

const FieldCondomonium = () => {
    const [options, setOptions] = useState([]);
    const { fetchFindOptions } = useCondominiumContext();

    useEffect(() => {
        (async () => {
            const { data } = await fetchFindOptions();
            setOptions(data);
        })();
    }, []);

    return <FieldSelect options={options} name={CONDOMINIUM_FIELDS.THIS} label={CONDOMINIUM_LABELS.THIS} />;
};

export default FieldCondomonium;
