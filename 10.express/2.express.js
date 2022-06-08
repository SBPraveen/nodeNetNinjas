/*
Express is a framework that helps us easily manage our routing requests, server side logic and responses.
Even without express we can still create servers but by using express we can write clean and manageable code.
*/

const express = require('express')

// express app server
const app = express()

//listen for request 
app.listen(3000)

//||Returning an HTML tag  
app.get('/',(req,res) => {
    res.send('<p>home page</p>')
})
//*Once a get method sends a response the rest of the get methods won't execute eventhough they have the same path

//||Returning a file
app.get('/about', (req, res)=>{
    //! The second parameter is the root from where the first parameter is relative
    res.sendFile('./views/about.html', {root: __dirname})
})

//||Redirect page
app.get('/about-us', (req,res)=>{
    res.redirect('/about')
})

//||404 page
//The use() method is used to create middleware and fire middlewares in express.
//!Unlike get method the use method doesnt have any url for which it has to execute. So always keep use method at the last just like default in switch case  
app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html', {root: __dirname})
})