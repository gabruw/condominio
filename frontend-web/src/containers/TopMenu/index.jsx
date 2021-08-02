//#region Imports

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import React, { Fragment, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PRIVATE_ROUTES } from 'routes/route-name';
import useSystemContext from 'storages/system/context';
import TOP_MENU_ROUTES from 'utils/constants/types/top-menu-routes';
import InputSearch from './InputSearch';
import MenuItem from './MenuItem';
import useStyles from './styles';

//#endregion

const TopMenu = () => {
    const styles = useStyles();
    const { roles } = useSystemContext();

    const routes = useMemo(() => roles && TOP_MENU_ROUTES.filter(({ auth }) => !auth || roles.includes(auth)), [roles]);

    const location = useLocation();
    const isPrivateRoute = useMemo(
        () => location && Object.values(PRIVATE_ROUTES).find((route) => location.pathname === route),
        [location]
    );

    const path = useMemo(() => location.pathname, [location]);
    const [selected, setSelected] = useState(path);

    return (
        <Fragment>
            {isPrivateRoute && (
                <div className={styles.grow}>
                    <AppBar position='static' color='secondary'>
                        <Toolbar>
                            <InputSearch />

                            <div className={styles.grow} />

                            {routes.map(({ name, route }, index) => (
                                <MenuItem key={index} route={route} selected={selected} setSelected={setSelected}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Toolbar>
                    </AppBar>
                </div>
            )}
        </Fragment>
    );
};

export default TopMenu;
