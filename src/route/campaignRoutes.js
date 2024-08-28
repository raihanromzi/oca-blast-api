import express, { Request, Response } from 'express'

const campaignRoutes = express.Router()

campaignRoutes.get('/', (req: Request, res: Response) => {
  res.send('campaign routes')
})

export { campaignRoutes }
