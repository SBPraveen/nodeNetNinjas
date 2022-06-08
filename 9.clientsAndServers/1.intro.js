/*
*Communication between a browser and a server
    We type a web address and the browser magically finds out server and gives it a request(Get/Post/Put/Delete). The server then processes the requests and sends back an HTML page/message which the browser displays.
*How does our browser magically finds our server?
    ?IP Addresses
        IP Address is an unique address to a computer/server that is connected to the internet.
    ?Domains
        Since IP addresses are numbers and it is hard to remember them we use domain names which are just a mask to the IP addresses.
    Thus when we type a web address(domain name), the browser finds out the IP address corresponding to the domain name and reaches our server correctly.

*Http
    This communication between the server and client takes place via the http.
    Http stands for HYPERTEXT TRANSFER PROTOCOL and is just a set of instructions which dictates how the communication should occur.

*Create a server 
In languages like PHP we have Appache which creates the server for us but in node we should create our own servers.
*/
/*
If a server is running and we make changes and save it, the changes wont be reflected.
!So always restart the server after making changes.
 */
const http = require('http')
const fs = require('fs')
//To the createServer we have to give a callback function which will run everytime the server gets a request.
//The callback function has two arguments req => has all the information about the client. res => this is the obj that we send back to the client
const server = http.createServer((req, res)=>{
    console.log('whowhoooo a request is made to the server');
    console.log(req.url, req.method);
    //!if the url we enter in our browser is http://localhost:3000/about then in req.url we will get only /about

    //*Response is a plain text
    //response headers
    // res.setHeader('Content-Type', 'text/plain')
    //res.write allows us to send the data back to the browser
    // res.write('hello this is yesbeee')

    //*Response is HTML tags
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>Hii im learning node js</p>')
    res.write('<p>Net Ninjas</p>')


    //Always remember to end the response 
    res.end()
})
//We have to make the above server to listen to the requests comming in
server.listen(3000, 'localhost', ()=>{
    console.log('Listening for request on port 3000');
})
//server.listen take in three arguments => port number, host name and a callback function that fires once the server starts listening
/*
*Localhost
    Local host is like a domain name but this takes us to a very specific IP address known as the look back IP address
    Look back IP address is 127.0.0.1 which points to our own computer.
    So when we connect to the localhost on the browser the browser connect back to our own computer(which acts as the host)
*Port numbers
    A port number is an address for each application or process in our computer that uses internet to communicate.
    This is automatically assigned by the OS
    Eg Skype, Discord , Spotify all these applications have their own port number.
    For local development we use 3000 port number
*/
//?In the browser go to localhost:3000 to see the output

/*
*Response headers 
    Response headers give the browser a little bit information of what data is comming back.(Eg the resonse is a test/json/html)
*/