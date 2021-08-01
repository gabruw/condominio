//#region Imports

import { makeStyles, lighten } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        ...ALIGN.CENTER
    },
    forget: {
        marginTop: 14,
        cursor: 'pointer',
        textDecoration: 'none',
        color: theme.palette.primary.main,
        '&:hover': {
            color: lighten(theme.palette.primary.main, 0.2)
        }
    },
    withoutAccount: {
        marginTop: ({ hasErrors }) => (hasErrors ? 10 : 120),
        ...ALIGN.CENTER
    },
    register: {
        marginLeft: 3,
        cursor: 'pointer',
        '&:hover': {
            color: lighten(theme.palette.primary.main, 0.2)
        }
    }
}));

export default useStyles;
