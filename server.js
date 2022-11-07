const express = require('express');
const config = require('./src/configs/config');
const connection = require('./src/db/connection');
const app = express();

console.log(`NODE_ENV=${config.NODE_ENV}`);

app.get('/',(req,res) => {
    res.send('Hello')
})


async function start(){
    app.listen(config.PORT,config.HOST,()=>{
        console.log(`APP LISTENING ON http://${config.HOST}:${config.PORT}`)
    });
    try {
        await connection.authenticate();
        console.log("DB successfilly connected");
    }catch (e) {
        console.log("Unnable to connect to the DB",e.message);

    }
}
start();

