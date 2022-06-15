const express = require('express')
const router = express.Router()
const Blog = require('../models/blogs')


router.get('/blogs', (req, res)=>{
    //createdAt: -1 => sort in desending order
   Blog.find().sort( {createdAt: -1})
        .then((result)=>{
            //||render
            //The render method is used to render a view and send the rendered html string to the client
            console.log(result);
            res.render('index', {title:"All blogs", blogs:result})
        })
        .catch((err) => {
            console.log(err);
        })
})

router.post('/blogs', (req,res) => {
    const blog = new Blog(req.body)
    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch((err) => {
            console.log(err);
        })
})

router.get('/blogs/create', (req,res)=>{
    res.render('create', {title:"Create Blog"})
})

router.get('/blogs/:id', (req, res)=>{
    const ID = req.params.id
    Blog.findById(ID)
        .then((result) =>{
            res.render('details', {blog: result, title:"Blog details"})
        })
        .catch((err) => {
            console.log(err);
        })
})

router.delete('/blogs/:id', (req, res)=>{
    const ID = req.params.id
    Blog.findByIdAndDelete(ID)
        .then((result) =>{
            //!Note we cannot use res.redirect('/blogs') because when the delete button is pressed we are doing fetch call from the frontend so we send back a JSON in which we ask the frontend to redirect to /blogs
            res.json({redirectURL: '/blogs'})
        })
        .catch((err) => {
            console.log(err);
        })
})

module.exports = router