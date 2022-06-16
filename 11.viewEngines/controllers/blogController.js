const Blog = require('../models/blogs')

//!Note the naming convention => All lowercase separated by _ => Eg : blog_index

//getting the "all blogs" page 
const blog_index = (req, res)=>{
    //createdAt: -1 => sort in desending order
   Blog.find().sort( {createdAt: -1})
        .then((result)=>{
            //||render
            //The render method is used to render a view and send the rendered html string to the client
            console.log(result);
            res.render('blogs/index', {title:"All blogs", blogs:result})
        })
        .catch((err) => {
            console.log(err);
        })
}

//getting the "specific blog" page 
const blog_details = (req, res)=>{
    const ID = req.params.id
    Blog.findById(ID)
        .then((result) =>{
            res.render('blogs/details', {blog: result, title:"Blog details"})
        })
        .catch((err) => {
            console.log(err);
            res.status(404).render('404', {title:"Blog not found"})
        })
}

//getting the "create blog" page 
const blog_create_get = (req,res)=>{
    res.render('blogs/create', {title:"Create Blog"})
}

//Once the submit button in the form is clicked 
const blog_create_post = (req,res) => {
    const blog = new Blog(req.body)
    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch((err) => {
            console.log(err);
        })
}

//once the delete button is clicked
const blog_delete = (req, res)=>{
    const ID = req.params.id
    Blog.findByIdAndDelete(ID)
        .then((result) =>{
            //!Note we cannot use res.redirect('/blogs') because when the delete button is pressed we are doing fetch call from the frontend so we send back a JSON in which we ask the frontend to redirect to /blogs
            res.json({redirectURL: '/blogs'})
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}