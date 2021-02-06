const express = require('express');
const path = require('path');
const {createProxyMiddleware} = require('http-proxy-middleware');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, '../client')));

app.use('/propertyDetails/', createProxyMiddleware({target: 'http://localhost:5545', changeOrigin:true}));

app.listen(port, ()=>console.log('Proxy server listening on port '+ port));