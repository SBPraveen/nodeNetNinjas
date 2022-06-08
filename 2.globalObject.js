/*
The global object is similar to the window object in the browser.
*/
//||global object
console.log(global)
/*
op =>
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 68.26689499989152,
      nodeStart: 0.2625010013580322,
      v8Start: 1.8012720011174679,
      bootstrapComplete: 52.182018000632524,
      environment: 25.450864002108574,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1653146139902.946
  },
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
}

*/

//||console.log
console.log("I'm learning node")

//||setTimeout
setTimeout(()=>{
    console.log("Im being printed after 2 seconds");
}, 2000)
/*
*op =>
Im being printed after 2 seconds
*/

//||setInterval
let time = 0
let timer = setInterval(()=>{
    time += 2
    console.log(time," seconds have passed");
    if(time>8){
        console.log("-----------10 seconds => timer over-----------")
        clearInterval(timer)
    }
}, 2000)
/*
*op =>
2  seconds have passed
4  seconds have passed
6  seconds have passed
8  seconds have passed
10  seconds have passed
-----------10 seconds => timer over-----------
*/

//||dirname
console.log(__dirname);
// op => /home/praveen/notes/nodeNetNinjas


//||filename
console.log(__filename);
// op => /home/praveen/notes/nodeNetNinjas/tempCodeRunnerFile.js
