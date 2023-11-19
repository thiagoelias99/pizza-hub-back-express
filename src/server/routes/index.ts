import express from 'express'
import WelcomeRouter from './welcome'

const router = express.Router()

router.use('/', WelcomeRouter)

export default router