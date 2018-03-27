const fs = require('fs');

var addPhone = (title,body) =>{

    console.log(title,body);


    var  phoneObject= fs.readFileSync('phones-data.json');
    console.log(JSON.parse(phoneObject));

    var phoneNumber ={
        name : title,
        phone: body,
    };
    var phoneObject = JSON.stringify(phoneNumber);
    fs.writeFileSync('phones-data.json',phoneObject);
}



module.exports ={
    addPhone : addPhone,
};
