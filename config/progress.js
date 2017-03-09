const chalk = require('chalk');
const progress = {
    format: 'build [:bar] ' + chalk.green.bold(':percent') + ' ('+chalk.red.bold(':elapsed')+' seconds) :msg ',
    clear: false
};

module.exports = progress;