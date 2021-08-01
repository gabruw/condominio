//#region Imports

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import React, { useCallback, useState } from 'react';
import useSystemContext from 'storages/system/context';
import useStyles from './styles';

//#endregion

const InputSearch = () => {
    const styles = useStyles();

    const { topMenuFetch } = useSystemContext();
    const [value, setValue] = useState('');

    const handleClick = useCallback(async () => {
        await topMenuFetch(value);
    }, [topMenuFetch, value]);

    return (
        <div className={styles.search}>
            <div className={styles.searchIcon}>
                <SearchIcon onClick={() => handleClick()} />
            </div>

            <InputBase
                value={value}
                onChange={(text) => setValue(text)}
                placeholder='Pesquisa...'
                classes={{
                    root: styles.inputRoot,
                    input: styles.inputInput
                }}
            />
        </div>
    );
};

export default InputSearch;
