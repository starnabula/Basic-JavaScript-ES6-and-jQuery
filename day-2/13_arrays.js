 
 
 var name = ['John','Joe','Jack','Jane'];
var fruits = new Array('Apple','Banana','Orange','Mango');

 //console.log(name);

 //.log(typeof(name));


 //console.log(name[1]);

 var firstuname = ['John','Joe','Jack','Jane'];
 console.log(firstuname[0]);
 console.log(firstuname[1], firstuname[3]);



 firstuname[1] = "Jany";
 console.log(firstuname);


 firstuname[4] = "Johny";
 console.log(firstuname);
 console.log(fruits);



 for(var i=0; firstuname[i];i++){
    console.log(firstuname[i]);
 }



 fruits.forEach(myFruit);

 function myFruit(value){
    console.log(value)
 }