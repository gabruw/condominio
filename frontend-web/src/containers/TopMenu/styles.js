//#region Imports

import { alpha, makeStyles } from '@material-ui/core/styles';

//#endregion

const useStyles = makeStyles((theme) => ({
    backColor: {
        backgroundColor: alpha(theme.palette.secondary.light, 0.15)
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    }
}));

export default useStyles;
