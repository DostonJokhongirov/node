import Events from 'node:events'

class Logger extends Events.EventEmitter {
    log(a, b) {
        this.emit('calculate', a + b)
    }
}

const logger = new Logger()

logger.on('calculate', data => {
    console.log(data);
})

logger.log('a', 'b')