//calling connect db
require('./config/mongo')

const {log} = require('console');
const express = require('express');
const app = express();
app.listen(3000, err => {
    !err? log(`Server running on http://localhost:3000`) : log(`server running on http://localhost:3000`)
});

app.get('/', (req, res, next) =>{
    res.send('Yes, you have just created you server')
});