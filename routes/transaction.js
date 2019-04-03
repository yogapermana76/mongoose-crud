const router = require('express').Router()
const TransactionController = require('../controllers/transactionController')

router.get('/find', TransactionController.findAll)
router.get('/find/:id', TransactionController.findOne)
router.post('/add', TransactionController.create)
router.put('/update/:id', TransactionController.update)
router.patch('/update/:id', TransactionController.update)
router.delete('/delete/:id', TransactionController.delete)

module.exports = router