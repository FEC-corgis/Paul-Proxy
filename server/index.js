const express = require('express');
const path = require('path');
const {createProxyMiddleware} = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 4000;

app.use('/rooms/:id', express.static(path.join(__dirname, '../client')));

// paul
app.use('/propertyDetails/:id', createProxyMiddleware({target: 'http://localhost:5545', changeOrigin:true}));

// jenny
app.use('/reviews/propId/:id', createProxyMiddleware({ target: 'http://localhost:1984', changeOrigin: true }))
app.use('/morePlaces/propId/:id', createProxyMiddleware({ target: 'http://localhost:1985', changeOrigin: true }))

//dane
app.use('/api/headerService/:id', createProxyMiddleware({ target: 'http://localhost:5001', changeOrigin: true }))

//slava

app.listen(port, ()=>console.log('Proxy server listening on port '+ port));