/*
Node allows us to run JS directly on the computer or server.

Computers only understand machine code.

Javascript
    ⬇️
   C++
    ⬇️
Assembly language
    ⬇️
Machine code

So how does JS runs in the browsers?
    Inside the browsers there is a V8 Engine written in C++ which compiles JS into machine code during runtime.
So outside the browsers ie in our computers there is nothing that will compile JS into machine code so it will not run.
This is where node comes into play. NodeJS is a Program(written in C++) which wraps the V8 engine and allows us to run node outside the browser.
Node JS not only wraps the V8 Engine but also comes with additional functionalities such as 
    Read and write files on a computer
    Connect to a database
    Act as a server for content
*/