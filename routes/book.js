const router = require('express').Router()
const BookController = require('../controllers/bookController')

router.get('/find', BookController.findAll)
router.post('/add', BookController.create)
router.delete('/delete/:id', BookController.delete)
router.put('/update/:id', BookController.update)

module.exports = router