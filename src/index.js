const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log('here');
  res.send('Hello World!')
});
app.get('/Hello', (req, res) => {
    console.log('aici');
  res.send('Hello World! X2')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})