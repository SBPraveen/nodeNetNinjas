const express = require('express')

//express app
const app = express()

//||register view engine 
//The view engine will automatically look at the view folder(So dont remname it. If you rename it then then use this command => "app.set('views', "changedFolderName")"
app.set('view engine', 'ejs')

//listen to request
app.listen(3000)

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

app.get('/', (req, res)=>{
    const blogs = [
        {title:"Awesomeness chapter 1", snippet: "Lorem ipsum dolor sit amet consectetur"},
        {title:"Awesomeness chapter 1", snippet: "Lorem ipsum dolor sit amet consectetur"},
        {title:"Awesomeness chapter 1", snippet: "Lorem ipsum dolor sit amet consectetur"},
    ]
    //||render
    //The render method is used to render a view and send the rendered html string to the client
    res.render('index', {title:"Home", blogs})
})

app.get('/about', (req, res)=>{
    res.render('about', {title:"About"})
})

app.get('/blogs/create', (req,res)=>{
    res.render('create', {title:"Create Blog"})
})

//404
app.use((req,res)=>{
    res.status(404).render('404', {title:"404"})
})