import { Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'
import { UnitCreateDto, UnitFamilyCreateDto } from '../dto/UnitDto'
import UnitsServices from '../../services/UnitsServices'

export default class UnitsController {
    static async postFamily(req: Request, res: Response, next: NextFunction) {
        try {
            const dto = UnitFamilyCreateDto.parse(req.body)

            const unitFamily = await UnitsServices.postFamily(dto)

            res.status(StatusCodes.CREATED).send(unitFamily)

        } catch (error) {
            next(error)
        }
    }

    static async getFamilyById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params

            const unitFamily = await UnitsServices.getFamilyById(id)

            res.status(StatusCodes.OK).send(unitFamily)

        } catch (error) {
            next(error)
        }
    }

    static async getFamilies(req: Request, res: Response, next: NextFunction) {
        try {
            const unitFamilies = await UnitsServices.getFamilies()

            res.status(StatusCodes.OK).send(unitFamilies)

        } catch (error) {
            next(error)
        }
    }

    static async post(req: Request, res: Response, next: NextFunction) {
        try {
            const dto = UnitCreateDto.parse(req.body)

            const unit = await UnitsServices.post(dto)

            res.status(StatusCodes.CREATED).send(unit)

        } catch (error) {
            next(error)
        }
    }

    static async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params

            const unit = await UnitsServices.getById(id)

            res.status(StatusCodes.OK).send(unit)

        } catch (error) {
            next(error)
        }
    }

    static async get(req: Request, res: Response, next: NextFunction) {
        try {
            const units = await UnitsServices.getAll()

            res.status(StatusCodes.OK).send(units)

        } catch (error) {
            next(error)
        }
    }
}