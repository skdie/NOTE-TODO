var object= {
    name :'galab'
};

var stringObj = JSON.stringify(object);
console.log(typeof stringObj);
console.log(stringObj);

var person = JSON.parse(stringObj);
console.log(typeof person);
console.log(person);