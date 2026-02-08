import { Router } from 'express'
import pelisRoutes from './api/pelis.routes.js'

const router = Router()

router.use(pelisRoutes)

export default router