//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles((theme) => ({
    modal: {
        ...ALIGN.CENTER
    },
    paper: {
        outline: 0,
        borderRadius: 10,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        backgroundColor: theme.palette.background.paper,
        minWidth: ({ isLarge, width = 600 }) => isLarge && width,
        ...ALIGN.COLUMN
    }
}));

export default useStyles;
