//events is a core module so no need to give its path 
var events = require('events')

//events emitter can be used to create custom events and react to those events when they are emitted

var myEmitter = new events.EventEmitter()

myEmitter.on('someEvent', function(msg){
    console.log(msg);
})

myEmitter.emit('someEvent', "Hii this is the emitter")