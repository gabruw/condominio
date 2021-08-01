//#region Imports

import { ptBR } from '@material-ui/core/locale';
import { createTheme } from '@material-ui/core/styles';
import COLOR from 'assets/styles/color';
import FONT from 'assets/styles/font';

//#endregion

const { PRIMARY, SECONDARY, NEGATIVE } = COLOR;

const theme = createTheme(
    {
        palette: {
            primary: {
                dark: PRIMARY.DARK,
                main: PRIMARY.MEDIUM,
                light: PRIMARY.LIGHT
            },
            secondary: {
                dark: SECONDARY.DARK,
                main: SECONDARY.MEDIUM,
                light: SECONDARY.LIGHT
            },
            error: {
                dark: NEGATIVE.DARK,
                main: NEGATIVE.MEDIUM,
                light: NEGATIVE.LIGHT
            }
        },
        typography: {
            ...FONT.ROBOTO_REGULAR,
            h1: {
                fontSize: 28,
                ...FONT.ROBOTO_MEDIUM
            },
            h2: {
                fontSize: 24,
                ...FONT.ROBOTO_MEDIUM
            },
            h3: {
                fontSize: 20,
                ...FONT.ROBOTO_MEDIUM
            },
            h4: {
                fontSize: 18,
                ...FONT.ROBOTO_MEDIUM
            },
            h5: {
                fontSize: 16,
                ...FONT.ROBOTO_MEDIUM
            },
            h6: {
                fontSize: 14,
                ...FONT.ROBOTO_MEDIUM
            },
            subtitle1: {
                fontSize: 12
            },
            subtitle2: {
                fontSize: 10
            }
        }
    },
    ptBR
);

export default theme;
