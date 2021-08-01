//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        margin: '35px 0px',
        '& > *': {
            margin: '0px 55px'
        },
        ...ALIGN.BETWEEN
    },
    filterContent: {
        ...ALIGN.LEFT
    },
    filterIcon: {
        width: 20,
        marginRight: '5px'
    },
    filter: {
        marginRight: '20px',
        alignItems: 'center',
        display: 'inline-flex'
    },
    chips: {
        padding: 5,
        backgroundColor: theme.palette.secondary.light,
        boxShadow: '-1px 7px 12px -2px rgba(0,0,0,0.100)'
    },
    createButton: {
        borderRadius: 30,
        marginLeft: 'auto'
    },
    confirmButton: {
        color: theme.palette.primary.light,
        backgroundColor: theme.palette.secondary.dark
    }
}));

export default useStyles;
