const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, '../client')));

app.get('*', (req, res)=>{
 // testing will change
 axios.get('http://localhost:5455/rooms:3') 
 .then((data)=>res.send(data));
});

app.listen(port, ()=>console.log('Proxy server listening on port '+ port));