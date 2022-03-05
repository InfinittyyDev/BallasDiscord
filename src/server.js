const express = require('express');
const server = express();

server.all('/', (req, res)=>{
    res.send(`Bot has awoken!`)
})
function keepAlive(){
    server.listen(3000, ()=>{console.log("Server Online")});
}
module.exports = keepAlive;