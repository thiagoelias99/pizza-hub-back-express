import express from 'express'
import UnitsController from '../controllers/UnitsController'
import idValidator from '../middlewares/idValidator'

const router = express.Router()

router.post('/families', UnitsController.postFamily)
router.get('/families', UnitsController.getFamilies)
router.get('/families/:id', idValidator, UnitsController.getFamilyById)

router.post('/units', UnitsController.post)
router.get('/units', UnitsController.get)
router.get('/units/:id', idValidator, UnitsController.getById)

export default router