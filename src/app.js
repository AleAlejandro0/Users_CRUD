const express = require('express')
const usersRouter = require('./users/users.router')

const port = 9000
const app = express()

app.use(express.json())

// Test 
app.get('/', (req, res) => {
  res.json({message: 'Ok to go'})
})

app.use('/app/v1', usersRouter)

app.listen(port, () => {
   console.log(`Server started at port: ${port}`)
})