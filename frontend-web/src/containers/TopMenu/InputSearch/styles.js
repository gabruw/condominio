//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles((theme) => ({
    search: {
        width: 'auto',
        borderRadius: 30,
        position: 'relative',
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(2),
        backgroundColor: theme.palette.secondary.dark,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark
        }
    },
    searchIcon: {
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        padding: theme.spacing(0, 2),
        ...ALIGN.CENTER
    },
    inputRoot: {
        color: 'inherit'
    },
    inputInput: {
        width: '36ch',
        padding: theme.spacing(1, 1, 1, 0),
        transition: theme.transitions.create('width'),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`
    }
}));

export default useStyles;
