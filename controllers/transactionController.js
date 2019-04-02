const Transaction = require('../models/transaction')

class TransactionController {
  static findAll(req, res) {
    Transaction.find()
    .populate('member')
    .populate('booklist')
      .then(transactions => {
        res.status(200).json(transactions)
      })
      .catch(err => {
        res.status(500).json(err)
    })
  }

  static create(req, res) {
    Transaction.create({
      member: req.body.member,
      in_date: req.body.in_date,
      out_date: req.body.out_date,
      due_date: req.body.due_date,
      fine: req.body.fine,
      booklist: req.body.booklist
    })
      .then(transaction => {
        res.status(201).json(transaction)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static update(req, res) {
    Transaction.findByIdAndUpdate(req.params.id, {
      member: req.body.member,
      in_date: req.body.in_date,
      out_date: req.body.out_date,
      due_date: req.body.due_date,
      fine: req.body.fine,
      booklist: req.body.booklist
    })
      .then(transaction => {
        res.status(201).json(transaction)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static delete(req, res) {
    Transaction.findByIdAndDelete(req.params)
      .then(() => {
        res.status(200).json('successfull deleted')
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}

module.exports = TransactionController