const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/static'+'/index.html'));
});

router.get('/404',function(req,res){
  res.sendFile(path.join(__dirname+'/static'+'/404.html'));
});

router.get('/contact-me',function(req,res){
  res.sendFile(path.join(__dirname+'/static'+'/contact-me.html'));
});

router.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/static'+'/about.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 8080);
