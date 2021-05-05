
console.log(__dirname,__filename);

class Profile {
    constructor(name,age){
    this.name=name;
    this.age=age;

    }

    greeting (){
        console.log(`My name is ${this.name} i'm ${this.age}`)
    }
}


module.exports=Profile;