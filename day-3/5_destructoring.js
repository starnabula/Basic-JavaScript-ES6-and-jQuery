

var scores =[55,65,82]
//var s1 = scores[0]
//var s2 = scores[1]
//console.log(s1, s2);

const [s1, , s3] = scores
console.log(s1,s3);

function createUser(){
    return {name: "mumi", age: 25}  
}

const {k1:name,k2:age} = createUser()
console.log(name,age);