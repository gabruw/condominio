//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles({
    container: {
        width: 560,
        boxSizing: 'border-box',
        padding: '70px 90px 20px 90px',
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)',
        ...ALIGN.CENTER,
        flexDirection: 'column'
    }
});

export default useStyles;
