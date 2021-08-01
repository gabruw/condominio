//#region Imports

import MenuItemMaterial from '@material-ui/core/MenuItem';
import clsx from 'clsx';
import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';

//#endregion

const MenuItem = ({ children, route, selected, setSelected }) => {
    const styles = useStyles();
    const history = useHistory();

    const menuItemClass = useMemo(
        () =>
            clsx(styles.text, {
                [styles.selected]: route === selected
            }),
        [styles, route, selected]
    );

    const handleClick = useCallback(() => {
        history.push(route);
        setSelected(route);
    }, [route, history, setSelected]);

    return (
        <MenuItemMaterial className={menuItemClass} onClick={() => handleClick()}>
            {children}
        </MenuItemMaterial>
    );
};

export default MenuItem;
