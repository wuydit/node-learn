
const log4js = require('log4js');
log4js.configure({
    appenders: {
        node_learn: {
            type: 'file',
            filename: 'logs/node-learn.log',
            encoding: 'utf-8',
            maxLogSize: 10
        },
        console: {
            type: 'console'
        }
    },
    categories: {
        default: {
            appenders: [
                'node_learn'
            ],
            level: 'DEBUG'
        },
        nodeLearnConsole: {
            appenders: [
                'console',
                'node_learn'
            ],
            level: 'DEBUG'
        },
    }
});

const log = log4js.getLogger('nodeLearnConsole');
module.exports = log;
