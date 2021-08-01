//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles({
    form: {
        height: 600,
        width: '100%',
        ...ALIGN.BETWEEN,
        flexDirection: 'column',
        paddingBottom: 50
    },
    title: {
        marginBottom: 45
    }
});

export default useStyles;
