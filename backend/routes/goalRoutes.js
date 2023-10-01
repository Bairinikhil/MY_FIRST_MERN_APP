const express = require('express')
const router = express.Router()
const { getFunctoin, PostFunctoin, putFunctoin, deleteFunctoin } = require('../controllers/goalController')
//request

router.get('/api', getFunctoin)
router.post('/api',PostFunctoin)
router.put('/api/:id',putFunctoin)
router.delete('/api',deleteFunctoin)


module.exports = router