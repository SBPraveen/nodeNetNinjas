/*
||Middle ware
    Code which runs on the server between getting a request and sending a response is known as a middleware
    The use method is used for setting up these middleware
    There can be more than one middlewares
    Once the response has been ended then(ie in the app.get method res.end()) then no other middlewares will be executed => Order of the code is very important
    ||next()
    Express doesnt automatically know to move on to the next piece of code and since we have not even ended the response(in the middle ware) the page will be in a loading state so we have to use next method to tell Express to move on to the next function
*Types of middlewares
    Logger middleware => Logs the details of every request
    Authentication check middle ware
    Middleware to parse JSON data from requests
    Middlewares that return 404 pages
    etc
*Third party middlewares
    morgan => Logger middleware 
    ? express.static =>
                This is also a middleware.For security purposes the server protects all our files from being accessed by the browser. This middleware helps us to set static files(.css files and also media files like images and videos) as public so that they can be accessed by the browser.


*/