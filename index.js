
var EventEmitter = require("events").EventEmitter;
var OSinfo = require('./modules/OSInfo');

var emitter = new EventEmitter();
emitter.on("beforeCommand", function (instruction) {
    console.log('You wrote: ' + instruction + ', trying to run command');
});
emitter.on("afterCommand", function () {
    console.log('Finished command\n\Waiting for input...');
});

process.stdin.setEncoding('utf-8');

process.stdout.write('App is running...');
var menu = ('\n\nType /menu for menu\nType /getOSinfo to display information\nType /exit to quit app\n\n');
process.stdout.write(menu);
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        emitter.emit('beforeCommand', instruction);
        switch(instruction) {
            case '/exit': {
                process.stdout.write('Quitting app!\n');
                process.exit();
                break 
            }
            case '/menu': {
                process.stdout.write(menu);
                break
            }
            case '/getOSinfo': {
                OSinfo.print();
                break;
            }
            default: {
                process.stderr.write('Wrong instruction!\nTry again...\n');
                break
            }                        
        }
        emitter.emit('afterCommand');
    }
});


