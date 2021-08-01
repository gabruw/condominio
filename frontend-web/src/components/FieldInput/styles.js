//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import FONT from 'assets/styles/font';

//#endregion

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    label: {
        marginBottom: 5,
        color: theme.palette.primary.main,
        ...FONT.ROBOTO_MEDIUM
    },
    input: {
        backgroundColor: theme.palette.secondary.dark
    },
    error: {
        height: 20,
        fontSize: 16,
        textAlign: 'right',
        color: theme.palette.error.main
    }
}));

export default useStyles;
