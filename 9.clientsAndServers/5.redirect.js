const fs = require('fs')
const http = require('http')

/*
Assume the if the user hits the /about-me then we need to redirect the users to /about
*/

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html')
    const url = req.url
    let path = './views/'
    switch(url){
        case "/":
            path += "index.html"
            res.statusCode = 200
            break
        case "/about":
            path += "about.html"
            res.statusCode = 200
            break
        case "/about-me":
            res.statusCode = 301
            //! 301 status code represents redirect
            res.setHeader('Location', '/about')
            //!end the response as a new request will be made(with /about)
            res.end()
            break
        default:
            path += "404.html"
    }
    fs.readFile(path,(err,data) => {
        if(err){
            console.log(err);
            res.end()
        }
        else{
            res.write(data)
            res.end()
        }
    })
})

server.listen(3000,'localhost', ()=>{
    console.log("Listening to port 3000");
})