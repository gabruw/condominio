//#region Imports

import { makeStyles, lighten } from '@material-ui/core/styles';

//#endregion

const useStyles = makeStyles((theme) => ({
    button: {
        height: 50,
        width: '100%',
        borderRadius: '30px',
        color: theme.palette.secondary.light,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: lighten(theme.palette.primary.main, 0.2)
        }
    }
}));

export default useStyles;
