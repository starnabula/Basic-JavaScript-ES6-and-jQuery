var person = {
    firstName:"NELU",
    lastname:"LALU",
    age:14,
    gender:"Male",
    fullName: function(){
        return this.firstName + " " + this.lastname;
    }
}




//ObjectName.propartyName
console.log(person.firstName);



console.log(person["lastname"]);



console.log(person.fullName());





var user = {
    is: "1",
    email: "joji@gmail.com",
    personinfo:{
        name:"John",
        address:{
            line1: "255 Piboonsongkram Rs.",
            line2: "Bangsue Distric",
            city: "Bangkok",
            zipcosde: "10300"
        }
    }
}


console.log(user.personinfo);
console.log(user.personinfo.name);
console.log(user.personinfo.address);
console.log(user.personinfo.city);