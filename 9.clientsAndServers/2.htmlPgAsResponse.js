var http = require('http');
var fs = require('fs');

//||Response is a HTML file
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    fs.readFile('./views/index.html', (err, data) =>{
        if(err){
            console.log(err);
            alert("error")
            res.end()
        }
        else{
            console.log("data is being written");
            res.write(data)
            res.end()
            /*
            short form for the above two lines ie 
                res.write(data)
                res.end()
            is the following line below
                res.end(datacd )
            */
        }
    });
}).listen(3000);