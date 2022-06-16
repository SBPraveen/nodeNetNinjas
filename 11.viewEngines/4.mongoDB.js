/*
*SQL Database
    SQL databases uses tables, rows and columns to store records of data.

*NO SQL Database
    NoSQL databases uses Collections and Documents
    Collections => similar to tables in a SQL Database
    Documents => similar to a record in a SQL Database
    "Collection" is a group of "Documents"

Once the database has been created in the mongoDB Atlas(online) we need to connect to the DB from our code

*Mongoose
    We can make use of the mongoDB api to connect but sometimes it can be a bit verbose so we use "Mongoose" to connect to the DB
    Mongoose is an ODM library(Object Document Mapping => This basically wraps the standard MongoDB API and provides a much easier way to connect to the DB) 

*Schemas and Models
    Schemas define the structure of the document.
    Eg: 
        User Schema:
            name(string), required
            age(number)
            bio(string), required
    Models allow us to communicate with the database collections

    Once the schema has been created we can use them as a constructor function.
        Eg: new Blog()
        There are a number of methods that we can use on these constructor functions
            ?save
                Used to save data to the DB
            ?find
                Fetches all the data from the DB
            ?find().sort()
                Fetches all the data in a sorted way from the DB
            ?findById
                fetches the data corresponding to a index from the DB
            ?findByIdAndDelete(id)
                delete the data corresponding to the id
*/

/*
||Request types
    Get => Read data from the DB
    Post => Store a newly created data(eg store a new blog)
    Put => Update an existing data(eg update a new blog)
    Delete => Delete a blog

||Route Parameters
    Route Parameter is the variable part of the route
    Eg: localhost:3000/blogs/id
        localhost:3000/blogs/12345
        localhost:3000/blogs/50
    !Note : In app.get the link before the route parameter there should be a colon and access inside the callback using req.params 
        app.get('/blogs/:id', ()=>{
            const id = req.params.id
        })
    !Note : Always place the app.get with the Route Parameter at the last because if app.get('/blogs/create', ()=>{}) is placed below app.get('/blogs/:id', ()=>{}) then express will consider "create" as an ID and execute app.get('/blogs/:id', ()=>{}) instead of app.get('/blogs/create', ()=>{})

||express router
        Allows us to manage the routes(Before everything was in the app.js file using express router the routes folder was created and the routes are organized properly) more efficiently as the size of the project grows.

||MVC
MVC - Model View Controller => This is a way of structuring our code
Here M is the model folder where we store all the routes
     V is the view folder where we store all the ejs code
     C is the controller folder and it forms a link between the Model and the Views folder ie it gets the data from the models and passes it to the views
(What i understood => Controller folder basically makes the routes file smaller)
*/