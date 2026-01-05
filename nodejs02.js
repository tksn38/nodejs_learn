// var EventEmitter = require('events').EventEmitter;
// var event = new EventEmitter();
// event.on('some_event', function() {
//         console.log('some_event Event Triggered!');
// });
// setTimeout(function() {
//         event.emit('some_event');
// }, 5000);


// var events = require('events'); 
// var emitter = new events.EventEmitter(); 
// emitter.emit('error'); 

var EventEmitter = require('events').EventEmitter
class MyEmitter extends EventEmitter {}
const customEmitter = new MyEmitter();

customEmitter.on('customEvent', () => {
  console.log('Custom event fired');
});

customEmitter.emit('customEvent');