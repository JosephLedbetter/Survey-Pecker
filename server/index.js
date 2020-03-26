const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'});
    console.log('running on localhost PORT 5000')
});

app.listen(5000);