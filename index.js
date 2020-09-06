const lodash = require('lodash');

const a = {
    name: 'Joe'
};

const b = lodash.get(a,'name', '---');

console.log('Hello', b);
