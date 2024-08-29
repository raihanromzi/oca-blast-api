import express from 'express'
import * as campaignController from '../controller/campaignController.js'

const campaignRoute = express.Router()

campaignRoute.post('/campaign', campaignController.createCampaign)

export { campaignRoute }
