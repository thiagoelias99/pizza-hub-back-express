import express from 'express'
import ProductsController from '../controllers/ProductsController'
import idValidator from '../middlewares/idValidator'

const router = express.Router()

router.post('/products', ProductsController.post)
router.get('/products/:id', idValidator, ProductsController.getById)
router.get('/products', ProductsController.getAll)

export default router