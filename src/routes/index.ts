import express from 'express'
import parseRouter from './parse'

const router = express.Router()

//Routes
router.use('/parse', parseRouter)

export default router
