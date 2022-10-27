const { Router } = require('express')
import { register, login, updateUser } from '../controllers/authController'

const router = Router()

router.post('/register', register)
router.post('/login', login)
router.patch('/update-user', updateUser)

export default router
