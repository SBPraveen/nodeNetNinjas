const fs = require('fs')
/*
||Streams
When reading very large files it might take quiet a lot of time. So instead of sending the entire data, data is sent in the form of a buffer.
A buffer is a small unit(say 2mb) of the entire data(say 2GB). Once a buffer gets filled it is immediately sent back to the client.
Eg: Youtube buffer => Instead of waiting for the whole video to load at once parts of the video is sent in the form of buffer.
*/

//||readStream
const readStream = fs.createReadStream('./text.txt')
const writeStream = fs.createWriteStream('./textCopy.txt')


//!lengthy way
// readStream.on('data', (chunk) => {
//     console.log("-----------------New Stream------------------------")
//     console.log(chunk);
//     // console.log(chunk.toString());
//     writeStream.write('\nNew Chunk\n')
//     writeStream.write(chunk)
// })
/*
op=>
-----------------New Stream------------------------
<Buffer 4c 6f 72 65 6d 20 69 70 73 75 6d 20 64 6f 6c 6f 72 20 73 69 74 20 61 6d 65 74 2c 20 63 6f 6e 73 65 63 74 65 74 75 72 20 61 64 69 70 69 73 63 69 6e 67 ... 65486 more bytes>
-----------------New Stream------------------------
<Buffer 73 20 71 75 61 6d 20 65 78 2c 20 76 69 76 65 72 72 61 20 65 74 20 63 6f 6e 76 61 6c 6c 69 73 20 71 75 69 73 2c 20 73 61 67 69 74 74 69 73 20 61 74 20 ... 28600 more bytes>
*/

//! Pipe is a shortcut to the above code snippet
readStream.pipe(writeStream)