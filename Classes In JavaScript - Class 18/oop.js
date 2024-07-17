//ES6 class keyword
// ES5 proptotype based inheritance
console.log({name:'Audi'});
class Person{
    constructor(name,email,count=0)
    {
        this.name=name,
        this.email=email,
        this.count=count;
    }
    login()
    {
        console.log(this.name,'has logged in');
    }
    logout()
    {
        console.log(this.name,'has logged out');
    }
}

let person1= new Person('ram','johnwick.com');
let person2= new Person('jay','jay.com',20);

person1.login();
person2.login();

//number
let rollno=new Number(10);
console.log(rollno);
let nm=new String('ram');
console.log(nm);
let obj=new Object({name:'ram'});
console.log(obj);
