//#region Imports

import { ThemeProvider } from '@material-ui/core';
import 'assets/css/global.css';
import React from 'react';
import Router from 'routes/Router';
import { SystemContextProvider } from 'storages/system/context';
import theme from 'utils/constants/theme';

//#endregion

const App = () => (
    <ThemeProvider theme={theme}>
        <SystemContextProvider>
            <Router />
        </SystemContextProvider>
    </ThemeProvider>
);

export default App;
