

function sayHi(name){
    var name = name || 'Chai'
    console.log("hi " + name);
}


sayHi()
sayHi('buyu')


function sayki(name = 'Chai') {
    console.log("HI " + name);
}


sayki()
sayki('buyu')