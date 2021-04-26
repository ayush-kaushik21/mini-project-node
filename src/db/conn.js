const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost:27017/feedback', {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Connection Successful')
  })
  .catch((err) => {
    console.log(err)
  })
