const onlyNumber = (value) => {
    value = value.replace(/\D/g, '');
    return value;
};

export default onlyNumber;
