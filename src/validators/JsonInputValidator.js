const JsonInputValidator = (file) => {
    try {
        JSON.parse(file);
    } catch (e) {
        return false;
    }
    return true;
};

export default JsonInputValidator;
