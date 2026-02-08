import { Router } from 'express'
import { getAllPelis, getOnePeli, createPeli } from '../../controllers/pelis.controller.js'

const router = Router()

router.get('/pelis', getAllPelis)
router.get('/pelis/:id', getOnePeli)
router.post('/pelis', createPeli)



export default router