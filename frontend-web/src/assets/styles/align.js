const FLEX_CENTER = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row'
};

const ALIGN = {
    LEFT: {
        ...FLEX_CENTER,
        justifyContent: 'flex-start'
    },
    RIGHT: {
        ...FLEX_CENTER,
        justifyContent: 'flex-end'
    },
    CENTER: {
        ...FLEX_CENTER,
        justifyContent: 'center'
    },
    BETWEEN: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    COLUMN: {
        display: 'flex',
        flexDirection: 'column'
    }
};

export default ALIGN;
