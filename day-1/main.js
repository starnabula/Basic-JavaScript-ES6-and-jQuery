//alert("helllosiri")

//แสดงผล
document.write("hello1234");
document.write("<br>hellooooo1234<br>");
document.write("<h1><font color='red'>ยินดีต้อนรับ</fort></h1>");

//สร้าฃงค่าตัวแปร
var name = "nebula";
var age = 28;

//console
//console.log(name);
//console.log(age);

//Method 
//var status = confirm("aer you ok?");

//console.log(status);

//prompt 
//var msg = prompt("กรุณาใส่ชื่อ","สมจิตร");
//console.log(msg);

//condition
//var age = prompt("กรุณาใส่อายุ","0");
//votable = (age >= 18)?"you can vote":"Old enough";
//console.log(votable);


var age = 8;
if(age <=10){
    var x ="Children";
}else if(age <=20){
    var x = "young";
}else{
    var x = "Faii";
}

console.log(x);

var day = new Date().getDay();

switch(day){
    case 0:
        console.log("Sunday");
        document.body.style.backgroundColor = "red"
        break;
    case 1:
        console.log("Monday");
        document.body.style.backgroundColor = "yellow"
        break;
    case 2:
        console.log("Tueday");
        document.body.style.backgroundColor = "pink"
        break;
    default:
        console.log("invalid day");
        document.body.style.backgroundColor = "white"
        break
}
