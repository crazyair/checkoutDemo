const chalk = require('chalk');
var isRunning = false;
var startTime = 0;
const progressPlugin = function (percentage, msg) {
    var stream = process.stderr;
    var now = new Date;
    var buildTime = 0;
    if (!isRunning) {
        isRunning = true;
        startTime = new Date;
    }
    if (stream.isTTY && percentage < 0.71) {
        buildTime = (now - startTime) / 1000 + 's';
        stream.cursorTo(0);
        stream.write('  ' + msg + '  use time ：' + chalk.green.bold(buildTime));
        stream.clearLine(1);
    } else if (percentage === 1) {
        console.log('');
        console.log('webpack: bundle build is now finished, use time : ' + buildTime);
    }
};

module.exports = progressPlugin;