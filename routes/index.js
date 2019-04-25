const express = require('express');
const log = require('../common/logger');
const FileService = require('../service/FileService');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/json', (req, res)=> {
  let users = '';//{ id:1, pId:0, name:"随意勾选 1", open:true},
  if(FileService.getUsersFile().fileExists){
    users = FileService.getUsersFile().data;
  }
  if(users.length > 0){
    users = JSON.parse(users);
    users = JSON.stringify(users)
  }
    log.info("menuTree:"+users);
    log.info(" role create 页面 action: add");
    res.jsonp(users)
});

module.exports = router;
