const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Schema is a constructor function

//creating a blog schema
const blogSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    snippet:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
}, {timestamps:true})
/*
?timestamps
Everytime we modify(CRUD) the blog document the timestamp will be generated automatically
*/

//Creating the model for the blog schema
/*
!Note Model names should be capitalized
The first argument is the model name. The model name will be pluralized and mongoose will look for the Blogs collection in our DB.
Eg: In our case mongoose will look for the Blogs collection
The second argument is the schema
*/
 const Blog = mongoose.model('Blog', blogSchema)

 module.exports = Blog