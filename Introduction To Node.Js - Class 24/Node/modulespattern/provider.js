var counter=(arr) =>{
    return "This array has " + arr.length+" itmes";
}

// es6 feature
var addition = (a, b) => `The sum of the two numbers is ${a + b}`;

const constant = 9.76543;

// module.exports.counter=counter;
// module.exports.addition=addition;
// module.exports.constant=constant;

module.exports={
    //es6
    counter,
    addition,
    constant
}


