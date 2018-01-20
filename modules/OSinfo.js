var os = require('os');
var colors = require('colors');

function getOSinfo() {
    var type = os.type();
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = Math.round(os.uptime());
    var upSeconds = uptime % 60;
    var upMinutes = ((uptime - upSeconds)/60) % 60;
    var upHours = (((uptime - upSeconds)/60) - upMinutes) /60;
    var userInfo = os.userInfo();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    console.log('System:'.gray, type);
    console.log('Release:'.red, release);
    console.log('CPU model:'.blue, cpu);
    console.log('Uptime(hh:mm:ss): '.green, `${upHours}h : ${upMinutes}m : ${upSeconds}s`);
    console.log('User name:'.yellow, userInfo.username);
    console.log('Home dir:'.gray, userInfo.homedir);
}

exports.print = getOSinfo;