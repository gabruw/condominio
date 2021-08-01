//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles({
    container: {
        width: '100%',
        ...ALIGN.CENTER,
        flexDirection: 'column'
    }
});

export default useStyles;
