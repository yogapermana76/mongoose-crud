const router = require('express').Router()
const MemberController = require('../controllers/memberController')

router.get('/find', MemberController.findAll)
router.get('/find/:id', MemberController.findOne)
router.post('/add', MemberController.create)
router.delete('/delete/:id', MemberController.delete)
router.put('/update/:id', MemberController.update)
router.patch('/update/:id', MemberController.update)

module.exports = router