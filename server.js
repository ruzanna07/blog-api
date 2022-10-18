const express = require('express');
const config = require('./src/configs/config');

const app = express();

console.log(`NODE_ENV=${config.NODE_ENV}`);

app.get('/',(req,res) => {
    res.send('Hello')
})

app.listen(config.PORT,config.HOST,()=>{
    console.log(`APP LISTENING ON http://${config.HOST}:${config.PORT}`)
})