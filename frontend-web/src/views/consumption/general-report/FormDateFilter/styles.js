//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles({
    container: {
        marginTop: 30,
        width: '100%',
        ...ALIGN.CENTER
    },
    content: {
        width: '80%',
        ...ALIGN.BETWEEN,
        alignItems: 'center'
    }
});

export default useStyles;
