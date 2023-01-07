import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send({ hi: 'there :)' })
})

const PORT = process.env.PORT || 5050
app.listen(PORT)