const router = require('express').Router()
const routeBook = require('./book')
const routeMember = require('./member')
const routeTransaction = require('./transaction')

router.get('/', (req, res) => {
  res.status(200).json('hello world')
})

router.use('/books', routeBook)
router.use('/members', routeMember)
router.use('/transactions', routeTransaction)

module.exports = router