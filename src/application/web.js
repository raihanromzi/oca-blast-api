import express from 'express'

export const web = express()
web.use(express.json())
web.use(express.urlencoded({ extended: true }))
web.use('/api/v1/hello-world', async (req, res, next) => {
    res.json({ message: 'Hello World' })
})
