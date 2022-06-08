const fs = require('fs')

//||read files
fs.readFile('./blog.txt', (err, data)=>{
    if(err){
        console.log(err);
    }
    else{
        //data is a buffer. To convert the buffer into a string we have to use to string.
        console.log(data);
        console.log(data.toString());
    }
})
/*
op=> 
<Buffer 48 69 20 74 68 69 73 20 69 73 20 79 65 73 42 65 65 65 20 61 6e 64 20 49 6d 20 6c 65 61 72 69 6e 67 20 6e 6f 64 65 20 6a 73 20 66 72 6f 6d 20 6e 65 74 ... 8 more bytes>
Hi this is yesBeee and Im learing node js from net ninjas.
*/

//||write files
/*
*If the file path mentioned is not present then writeFile creates a new file and writes the content in that new file
writeFile replaces the content in the file with the content that is present as the second parameter
*/

fs.writeFile('./blog.txt',"This is the new text that was written using the fs.writeFile", () => {
    console.log("The contents in the file blog.txt has been overwritten with the new text");
})

fs.writeFile('./blog2.txt',"This is the new text that was written using the fs.writeFile", () => {
    console.log("The contents in the file blog.txt has been overwritten with the new text");
})

//||directories
/*
! If a directory(say mainFolder) is present and we try to make a directory with the same name(say mainFolder) then we will get an error so  before making a directory always check if the diretory is present

existsSync => Check if a directory/file is there or not
mkdir => make a directory
rmdir => remove a directory
 */ 
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Folder created");
        }
    })
}
else{
    fs.rmdir('./assets', (err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("A folder with the same name is already present so the folder is deleted"); 
        }
    })
}

//||deleting files
if(fs.existsSync('./blog.txt')){
    fs.unlink('./blog.txt', (err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("File successfully deleted")
        }
    })
}