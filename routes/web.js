const express = require('express');
const { index, create, store, update, StoreUpdate, destroy } = require('../controllers/PostController');
const router = express.Router();
//! this gets all the posts
router.get('/',index)
//! this render the create post form
router.get('/create',create)
//! this route create apost
router.post('/store',store)
//! this render the update post form
router.get('/update/:id',update)
//! this route update apost
router.post('/update/:id',StoreUpdate)
//! this route delete apost
router.post('/delete/:id',destroy)
module.exports = router
