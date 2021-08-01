//#region Imports

import { makeStyles } from '@material-ui/core/styles';

//#endregion

const useStyles = makeStyles((theme) => ({
    bodyRow: {
        '& > *': {
            padding: '10px'
        }
    },
    grayRow: {
        backgroundColor: theme.palette.secondary.dark
    },
    bodyCell: {
        borderRight: `1px solid ${theme.palette.primary.light}`
    },
    iconButton: {
        padding: 0
    },
    editIcon: {
        color: theme.palette.primary.medium
    },
    removeIcon: {
        color: theme.palette.error.main
    }
}));

export default useStyles;
