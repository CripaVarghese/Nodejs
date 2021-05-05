const EventEmitter=require('events');

class EventEmit extends EventEmitter {}
const EveEmitter=new EventEmit();
EveEmitter.on('event',() => console.log('EVENT FIRED'));
EveEmitter.emit('event');

