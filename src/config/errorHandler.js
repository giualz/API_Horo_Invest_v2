class errorHandler extends Error {
    constructor(statusCode, message, code = 'ERROR') {
        super();
        this.code = code;
        this.statusCode = statusCode;
        this.message = message;
    }
}

module.exports = errorHandler