const express = require('express');
var router = express.Router();

const path = require('path');

const blogController = require('../controller/blog');

router.get('/',blogController.getBlog);

router.get('/blog-detail/:id',blogController.getBlogDetail);

router.get('/admin/blog',blogController.blogAdd)

router.post('/admin/blog',blogController.blogAdd)

router.get('/admin/blog-list',blogController.blogList)

router.get('/Delete/:id',blogController.blogDEL)

router.get('/Update/:id',blogController.blogUPDATE)

router.post('/UpdatePost',blogController.blogUPDATEPOST)



module.exports = router;
