const EventEmitter = require('events');

const customEventEmmiter = new EventEmitter();

customEventEmmiter.on('response', ()=>{
    console.log('Event Happend');
})

customEventEmmiter.emit('response')