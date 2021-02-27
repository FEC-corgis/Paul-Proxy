const express = require('express');
const path = require('path');
const {createProxyMiddleware} = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// paul
app.use('/propertyDetails/:pId', createProxyMiddleware({ target: 'http://13.56.218.102:5545', changeOrigin: true }))
app.use('/map/:pId', createProxyMiddleware({ target: 'http://54.215.197.139:5545', changeOrigin: true }))

// jenny
app.use('/reviews/propId/:id', createProxyMiddleware({ target: 'http://3.20.69.139:1984/', changeOrigin: true }))
app.use('/morePlaces/propId/:id', createProxyMiddleware({ target: 'http://3.140.48.105:1985/', changeOrigin: true }))

//dane
app.use('/api/headerService/:propertyId', createProxyMiddleware({ target: 'http://54.211.95.226:5001', changeOrigin: true }))
app.use('/api/hostedByService/:propertyId', createProxyMiddleware({ target: 'http://54.237.132.122:5002', changeOrigin: true }))

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

app.listen(port, ()=>console.log('Proxy server listening on port '+ port));
