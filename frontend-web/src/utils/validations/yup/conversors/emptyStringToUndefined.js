const emptyStringToUndefined = (value, originalValue) => {
    if ((typeof originalValue === 'string' && originalValue === '') || originalValue === null) {
        return undefined;
    }

    return value;
};

export default emptyStringToUndefined;
