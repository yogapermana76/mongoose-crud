const mongoose = require('mongoose')
const Schema = mongoose.Schema

const memberSchema = new Schema({
  name: String,
  address: String,
  zipcode: String,
  email: {
    type: String,
    validate: [{
      validator: function(email) {
        mongoose.model('Member', memberSchema).findOne({
          email: email
        })
          .then(found => {
            if(found) {
              throw new Error('email sudah ada')
            }
          })
      },
      validator: function(email) {
        let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return re.test(email)
      },
      message: 'format email salah'
    }]
  },
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        if(v.length < 11 && v.length > 13) {
          throw new Error('jumlah karakter harus diantar 11 dan 13')
        }
      }
    }
  }
});

let Member = mongoose.model('Member', memberSchema);

module.exports = Member