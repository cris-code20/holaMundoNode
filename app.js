const express = require('express')
const app = express();

app.get('/', (req, res)=>{
    res.send("hola mundo")
})

const port = app.listen(3000, ()=>{
    console.log(`la aplicacion esta corriendo en el puerto: http://localhost:${3000}`);
})

module.exports = app;