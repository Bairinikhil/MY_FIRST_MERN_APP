const express = require('express')
const router = express.Router()
const { getFunctoin, PostFunctoin, putFunctoin, deleteFunctoin,getSingle } = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')
//request

router.get('/api',protect ,getFunctoin)
router.post('/api',protect,PostFunctoin)
//to get a single GET request
router.get('/api/:id', protect,getSingle)

router.put('/api/:id',protect,putFunctoin)
router.delete('/api/:id',protect,deleteFunctoin)


module.exports = router