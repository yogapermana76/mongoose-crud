const router = require('express').Router()
const MemberController = require('../controllers/memberController')

router.get('/find', MemberController.findAll)
router.post('/add', MemberController.create)
router.delete('/delete/:id', MemberController.delete)
router.patch('/update/:id', MemberController.update)

module.exports = router