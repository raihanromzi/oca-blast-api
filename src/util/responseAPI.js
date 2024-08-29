import { cleanObj } from './cleanObj.js'

const responseSuccess = (code, status, data, pagination) =>
    cleanObj({
        code,
        status,
        data,
        pagination,
    })

const responseError = (code, status, error) =>
    cleanObj({
        code,
        status,
        errors: error,
    })

export class ResponseError extends Error {
    constructor(code, status, error) {
        super(error)
        this.code = code
        this.status = status
        this.error = error
    }
}

export { responseSuccess, responseError }
