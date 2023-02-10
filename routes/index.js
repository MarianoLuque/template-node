import express from 'express'
import fs from 'fs'
import path, {resolve } from 'path';

const router = express.Router();

const PATH = resolve('.')
const PATH_ROUTES = path.join(PATH, 'routes')

const removeExtension = (fileName) => {
    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter(async (file) => {
    const name = removeExtension(file)
    if (name != 'index'){
        let importedModule = await import (`./${file}`)
        router.use(`/${name}`, importedModule.default)
    }
})

export default router