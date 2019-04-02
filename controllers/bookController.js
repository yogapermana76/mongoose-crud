const Book = require('../models/book')

class BookController {
  static findAll(req, res) {
    Book.find()
      .then(books => {
        res.status(200).json(books)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static create(req, res) {
    Book.create({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    })
      .then(book => {
        res.status(201).json(book)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static delete(req, res) {
    Book.findByIdAndDelete(req.params.id)
      .then(() => {
        res.status(200).json('successfull deleted')
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static update(req, res) {
    Book.findByIdAndUpdate(req.params.id, {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    })
      .then(newBook => {
        res.status(201).json(newBook)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}

module.exports = BookController