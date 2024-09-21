import express from 'express'
import * as campaignController from '../controller/campaignController.js'

const campaignRoute = express.Router()

campaignRoute.post('/campaigns', campaignController.createCampaign)
campaignRoute.post('/blast', campaignController.createBlastCampaign)

export { campaignRoute }
