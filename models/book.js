const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number
});

let Book = mongoose.model('Book', bookSchema);

module.exports = Book