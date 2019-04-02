const Member = require('../models/member')

class MemberController {

  static findAll(req, res) {
    Member.find()
      .then(members => {
        res.status(200).json(members)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static create(req, res) {
    Member.create({
      name: req.body.name,
      address: req.body.address,
      zipcode: req.body.zipcode,
      email: req.body.email,
      phone: req.body.phone
    })
      .then(book => {
        res.status(201).json(book)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static delete(req, res) {
    Member.findByIdAndDelete(req.params.id)
      .then(() => {
        res.status(200).json('successfull deleted')
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static update(req, res) {
    Member.findOneAndRemove(req.params.id, {
      name: req.body.name,
      address: req.body.address,
      zipcode: req.body.zipcode,
      email: req.body.email,
      phone: req.body.phone
    })
      .then(member => {
        res.status(201).json(member)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

}

module.exports = MemberController