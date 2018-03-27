const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const phones = require('./phones');

const argv = yargs.argv;
const command = argv._[0];

if (command === 'add'){
    var phone =phones.addPhone(argv.title, argv.body);
}

if (command === 'delete'){

}

if (command === 'list'){

}

if (command === 'read'){

}