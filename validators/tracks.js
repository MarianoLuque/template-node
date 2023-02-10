import {check} from 'express-validator'
import validateResults from '../utils/handleValidator'

export const validatorCreateItem = [
    check('name')
    .exists()
    .notEmpty(),
    check('mediaId')
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

export const validatorGetItem = [
    check('id')
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

