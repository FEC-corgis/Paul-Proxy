const express = require('express');
const path = require('path');
const {createProxyMiddleware} = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// paul
app.use('/propertyDetails/:pId', createProxyMiddleware({ target: 'http://54.176.104.176:5545', changeOrigin: true }))

// jenny
app.use('/reviews/propId/:id', createProxyMiddleware({ target: 'http://3.22.194.10:1984/', changeOrigin: true }))
app.use('/morePlaces/propId/:id', createProxyMiddleware({ target: 'http://18.222.249.216:1985/', changeOrigin: true }))

//dane
app.use('/api/headerService/:propertyId', createProxyMiddleware({ target: 'http://ec2-34-228-69-178.compute-1.amazonaws.com:5001', changeOrigin: true }))
app.use('/api/hostedByService/:propertyId', createProxyMiddleware({ target: 'http://ec2-18-207-211-57.compute-1.amazonaws.com:5002', changeOrigin: true }))

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

app.listen(port, ()=>console.log('Proxy server listening on port '+ port));
