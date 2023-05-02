const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World!')
})


const chef = require('./data/chef.json');
app.get('/chef', (req, res) => {
    res.send(chef);
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})