const mongoose = require('mongoose')
const validator = require('validator')

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    uppercase: true,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid Email')
      }
    },
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
})

const Feedbackform = new mongoose.model('Feedbackform', feedbackSchema)

module.exports = Feedbackform
