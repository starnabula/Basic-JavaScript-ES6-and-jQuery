

function wakeup(){
    console.log('wakup');
}



function sayHello(name){
    console.log("Hello" + name)

}

function calArea(width, heiht){
    var area = width* heiht;
    return area;

}

//เรียกใช้งาน 
wakeup();
sayHello("nano");
console.log("พื้นที่" + calArea(3,4) + "ตรม");

//ฟังชันม่มีตัวตน
var action = function(a,b){
    return a*b;
}

var result = action(4,3);

console.log(action(3,5));
console.log(result);