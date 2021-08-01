//#region Imports

import { makeStyles } from '@material-ui/core/styles';

//#endregion

const useStyles = makeStyles({
    container: {
        marginTop: 25,
        marginBottom: 25,
        width: ({ widthAuto }) => (widthAuto ? 'auto' : '100%')
    },
    list: {
        paddingInlineStart: 25
    }
});

export default useStyles;
