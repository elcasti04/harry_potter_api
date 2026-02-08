import { Router } from 'express'
import { getAllPelis, getOnePeli, createPeli } from '../../controllers/pelis.controller.js'

const router = Router()

router.get('/', getAllPelis)
router.get('/:id', getOnePeli)
router.post('/', createPeli)



export default router