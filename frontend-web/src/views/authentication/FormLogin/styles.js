//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles({
    form: {
        height: 370,
        width: '100%',
        ...ALIGN.BETWEEN,
        flexDirection: 'column'
    },
    title: {
        marginBottom: 55
    }
});

export default useStyles;
