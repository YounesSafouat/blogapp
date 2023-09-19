const express = require('express');
const Post = require('../models/Post');
//*this method return all the posts from the database
exports.index = async (req,res)=>{
     let posts = await Post.find({})
     res.render('index',{posts})
}
//*this method render the posts form to create a new one
exports.create = (req,res)=>{
     res.render('create')
}
//*this method stores the post to the database
exports.store = async (req,res)=>{
     const {message,title} = req.body;
     const data = await Post.create(req.body)
     res.redirect('..')
}
//*this method render the posts form to update a post
exports.update = async (req,res)=>{
     const id = req.params.id
     const post = await Post.findById(id)
    
     res.render('update',{post})
}
//*this method update the post in the database
exports.StoreUpdate = async (req,res)=>{
     const id = req.params.id
     const data = await Post.findByIdAndUpdate(id,req.body)
     res.redirect('/')
}
//*this method delete a post 
exports.destroy = async (req, res) => {
     let {id} = req.params ;
     try {
       const data = await Post.findByIdAndDelete(id)
       res.redirect("..");
     } catch (erreur) {
       const errors = handleError(erreur);
       res.render("errorPage", { errors });
     }
   };