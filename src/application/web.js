import express from 'express'
import { checkDBMiddleware } from '../middleware/checkDBMiddleware.js'
import { errors } from '../util/messageError.js'
import { responseError } from '../util/responseAPI.js'
import { errorMiddleware } from '../middleware/errorMiddleware.js'
import { templateMessageRoute } from '../route/templateMessageRoute.js'

export const web = express()
web.use(express.json())
web.use(express.urlencoded({ extended: true }))
web.use(checkDBMiddleware)

web.use('/api/v1', templateMessageRoute)

web.use(errorMiddleware)

// invalid api route
web.use((req, res) => {
    return res
        .status(errors.HTTP.CODE.UNAUTHORIZED)
        .send(
            responseError(
                errors.HTTP.CODE.UNAUTHORIZED,
                errors.HTTP.STATUS.UNAUTHORIZED,
                errors.HTTP.MESSAGE.UNAUTHORIZED
            )
        )
        .end()
})
