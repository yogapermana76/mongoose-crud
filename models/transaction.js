const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
  member: {
    type: Schema.Types.ObjectId,
    ref: 'Member'
  },
  in_date: Date,
  out_date: Date,
  due_date: Date,
  fine: Number,
  booklist: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }]
});

transactionSchema.post('findOneAndUpdate', (updatedData, next) => {
  let daysBetween = updatedData.in_date.getDate() - updatedData.due_date.getDate()

  if(daysBetween > 0) {
    updatedData.fine = daysBetween * 1000
  } else {
    updatedData.fine = 0
  }

  updatedData.save()
  next()
})

let Transction = mongoose.model('Transaction', transactionSchema);

module.exports = Transction