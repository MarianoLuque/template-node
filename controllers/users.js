import { matchedData } from 'express-validator'
import models from '../models/index.js'
import { handleHttpError } from '../utils/handleError.js'

export const getItems = async (req, res) => {

    try {
        /* user = req.user
        const data = await models.tracksModel.findAllData()
        res.send({data, user}) */
    } catch (err) {
        console.log(err)
        handleHttpError(res, 'ERROR_EN_TRACKS_GET_ITEMS')
    }
}
export const getItem = async (req, res) => {
    try {
        /* req = matchedData(req)
        console.log(req)
        const {id} = req
        const data = await models.tracksModel.findOneData(id)
        res.send({data}) */
    } catch (err) {
        handleHttpError(res, 'ERROR_EN_TRACKS_GET_ITEM')
    }
    
}
export const createItems = async (req, res) => {
    try {
        /* const body = matchedData(req)
        const data = await models.tracksModel.create(body)
        res.send({data}) */
    } catch (err) {
        handleHttpError('ERROR_CREATE_ITEMS')
    }  
}
export const updateItems = async (req, res) => {
    try {
        /* const {id, ...body} = matchedData(req)
        console.log({id, body})
        const data = await models.tracksModel.findOneAndUpdate(id, body)
        res.send({data}) */
    } catch (err) {
        handleHttpError(res, 'ERROR_CREATE_ITEMS')
    }
}
export const deleteItems = async (req, res) => {
    try {
        /* req = matchedData(req)
        const {id} = req
        const data = await models.tracksModel.delete(id)
        res.send({data}) */
    } catch (err) {
        handleHttpError(res, 'ERROR_EN_TRACKS_GET_ITEM')
    }
}

