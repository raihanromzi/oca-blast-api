import express from 'express'

import * as templateMessageController from '../controller/templateMessageController.js'

const templateMessageRoute = express.Router()

templateMessageRoute.post('/template-messages', templateMessageController.createTemplateMessage)

export { templateMessageRoute }
