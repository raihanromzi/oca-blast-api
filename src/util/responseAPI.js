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

export { responseSuccess, responseError }
