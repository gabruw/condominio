//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        ...ALIGN.CENTER
    }
}));

export default useStyles;
