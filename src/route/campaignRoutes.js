import express from 'express'
import * as campaignController from '../controller/campaignController.js'

const campaignRoutes = express.Router()

campaignRoutes.post('/campaign', campaignController.createCampaign)

export { campaignRoutes }
