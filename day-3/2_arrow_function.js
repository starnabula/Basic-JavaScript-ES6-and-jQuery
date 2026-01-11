
var greet = function(name,massage) {
    return massage + name
}


console.log(greet("John", "Hello"))


var arrowGreet = (name, massage) => {
    return massage + name 
}


//var arrowGreet = (name, massage) => massage + name 
//console.log(arrowGreet("koluyoki", "Hello"))


var arrowGreet = massage => 
console.log(arrowGreet("hello moji"))



var square = x => x * x
console.log(square(5))