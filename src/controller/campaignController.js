const createCampaign = (req, res, next) => {
    try {
        res.status(200).json({ message: 'Campaign created successfully!' })
    } catch (e) {
        next(e)
    }
}

export { createCampaign }
