import express from "express";
const router = express.Router()
import {getItems} from '../controllers/users.js'

router.get('/', getItems)

export default router