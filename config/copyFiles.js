const path = require('path');
const files = [
    // {from:'./src/download/*',to:'./download/', flatten: true}
    {context: path.join(__dirname,'/../lib/'),from:'lib*',to:'./static/js'}
];

module.exports = files;
