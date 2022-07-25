const express = require('express')
const app = express()

app.get('/', (req, res) =>{
  res.send('Hello world 2, 3, 4, 5')
}) 

app.listen(3000, () => console.log(`Online http://localhost:3000`))