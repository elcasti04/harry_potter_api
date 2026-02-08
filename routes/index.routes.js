import { Router } from 'express'
import pelisRoutes from './api/pelis.routes.js'

const router = Router()

router.get('/', (req, res) => {
    res.send('peliculas')
})

router.use(pelisRoutes)

export default router