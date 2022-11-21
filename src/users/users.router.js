const router = require('express').Router()
const  userServices = require('./users.services')

router.get('/users', userServices.getAllUsers)
router.post('/users', userServices.createNewUser)
router.get('/users/:id', userServices.getUserByID)
router.delete('/users/:id', userServices.deleteByID)
router.put('/users/:id', userServices.updateUser)

module.exports = router