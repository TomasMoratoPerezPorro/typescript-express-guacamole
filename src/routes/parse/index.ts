import express from 'express'
import * as parseGetController from '../../controllers/parse/get'

const parseRouter = express.Router()

//CREATE CRO
parseRouter.get('/', parseGetController.getParse)

export default parseRouter
