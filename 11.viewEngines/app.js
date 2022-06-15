const express = require('express')
const mongoose = require('mongoose')
const dotEnv = require('dotenv')
const blogRoutes = require('./routes/blogRoutes')
//express app
const app = express()

//||Connecting to the env file
dotEnv.config();

//||connect to mongoDB
mongoose.connect(process.env.DB_URI)
    .then((result) => {
        console.log("connected to DB via mongoose")
        //!Note: listen to request only after connecting to the DB ie. the app.listen should be inside the mongoose.connect.then 
        //listen to request
        app.listen(3000)
    })
    .catch((err) => console.log(err))

//||register view engine 
//The view engine will automatically look at the view folder(So dont remname it. If you rename it then then use this command => "app.set('views', "changedFolderName")"
app.set('view engine', 'ejs')



//||Logger middleware
app.use((req,res, next) => {
    console.log("new request made");
    console.log("Host", req.hostname);
    console.log("Path", req.path);
    console.log("Method", req.method);
    //||next()
    //Express doesnt automatically know to move on to the next function and since we have not even ended the response the page will be in a loading state so we have to use next method to tell Express to move on to the next function
    next()
})
//||Make static files public middleware
app.use(express.static('public'))

//||Get data from the url middleware
//When the form is submitted the data will be there in the url and express.urlencoded will take that data and send it in the req object
app.use(express.urlencoded({extended: true}))

//Blog router
app.use(blogRoutes)

app.get('/', (req, res)=>{
    //||render
    //The render method is used to render a view and send the rendered html string to the client
    res.render('home', {title:"Home"})
})

app.get('/about', (req, res)=>{
    res.render('about', {title:"About"})
})


//404
app.use((req,res)=>{
    res.status(404).render('404', {title:"404"})
})





//mongoose learning
// app.get('/add-blog', (req,res) => {
//     const blog = new Blog({
//         title:"New blog 2",
//         snippet:"This is the snippet of the new blog 2",
//         body:"This is the body of the blog 2"
//     })

//     //||save
//     //save() method saves the data to the DB
//     blog.save() 
//     .then((result) => {
//         res.send(result)
//     })   
//     .catch((err) => {
//         console.log(err)
//     })
// })
// app.get('/all-blogs',(req, res) => {
//     //||find
//     //the find method fetches all the data from the DB
//     Blog.find()
//         .then((result)=>{
//             res.send(result)
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
// })
// app.get('/single-blog', (req,res)=>{
//     Blog.findById('62a9b7b7d961d0cc7f0564f3')
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// })