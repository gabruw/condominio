//#region Imports

import { makeStyles, lighten } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles((theme) => ({
    closeContainer: {
        width: '100%',
        ...ALIGN.RIGHT
    },
    closeIconButton: {
        backgroundColor: theme.palette.primary.dark,
        '&:hover': {
            backgroundColor: lighten(theme.palette.primary.dark, 0.3)
        }
    },
    closeIcon: {
        color: theme.palette.secondary.main
    },
    title: {
        marginBottom: 35
    }
}));

export default useStyles;
