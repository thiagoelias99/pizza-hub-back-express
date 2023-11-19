import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({
        msg: 'Hello World',
        time: new Date()
    })
})

export default router