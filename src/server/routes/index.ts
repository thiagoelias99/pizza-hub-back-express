import express from 'express'
import WelcomeRouter from './welcome'
import ProductsRouter from './productsRouter'
import UnitsRouter from './unitsRouter'

const router = express.Router()

router.use(WelcomeRouter)
router.use(ProductsRouter)
router.use(UnitsRouter)

export default router