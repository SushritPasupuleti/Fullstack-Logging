const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');

app.use(cors({
    origin: 'http:/localhost:3000'
}));

app.get('/', (req, res) => {
  res.send('Hello There.')
})

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port} 🚀`)
})
