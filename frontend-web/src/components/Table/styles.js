//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';
import FONT from 'assets/styles/font';

//#endregion

const useStyles = makeStyles({
    modalButtonContainer: {
        marginTop: '35px',
        ...ALIGN.BETWEEN
    },
    buttonContainer: {
        width: '48%'
    },
    root: {
        width: '100%',
        backgroundColor: 'transparent'
    },
    container: {
        maxHeight: '80vh',
        marginBottom: '30px',
        borderBottom: '1px solid #A9A9A9'
    },
    headerCell: {
        fontSize: '16px',
        backgroundColor: 'transparent',
        borderBottom: '1px solid #A9A9A9',
        ...FONT.ROBOTO_BOLD
    },
    footer: {
        ...ALIGN.CENTER
    }
});

export default useStyles;
