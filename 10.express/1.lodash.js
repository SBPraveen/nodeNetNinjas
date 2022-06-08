const _ = require('lodash')

//random produces a random number between the given range
const num = _.random(0,20)
console.log(num);

//once function allows a function to run only one time
const greet = _.once(() => {
    console.log("hello");
})

greet()
greet()
greet()
greet()