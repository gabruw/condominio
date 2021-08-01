const extractErrors = (name, object = {}) => {
    name.split('.').forEach((value) => {
        object = object && object[value];
    });

    return object;
};

export default extractErrors;
