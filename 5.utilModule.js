var util = require('util');
var events = require('events')


var Person = function(name){
    this.name = name
}

util.inherits(Person, events.EventEmitter)

var yesBeee = new Person("yesBee")
var panda = new Person("panda")

var people = [yesBeee, panda]

people.forEach(function(person){
    person.on('speak', function(msg){
        console.log(person.name + " spoke " + msg);
    })
})

yesBeee.emit("speak", "Im awesome")
panda.emit("speak", "Im the best")