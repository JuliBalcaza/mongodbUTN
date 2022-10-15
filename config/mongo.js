const dotEnv = require('dotenv');
dotEnv.config();
//Mongo DB atlas config and connect
const mongoose = require('mongoose');
const dbUri = process.env.dbUri

mongoose.connect(dbUri, (err) => {
    err? console.log('\033[321m' + err) : console.log('Mongo Atlas connected');
});
