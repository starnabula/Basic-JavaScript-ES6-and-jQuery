

/*function doA(){
    setTimeout(function(){
    console.log("This id 2nd say message");
 }, 2000)
}    
function doB(){
    console.log("This is 3rd say message");
}

doA()
doB()*/


function doA(callback){
    console.log("Loading...");
    setTimeout(function(){
    console.log("This id 2nd say message");
    callback()
 }, 2000)
}    
function doB(){
    console.log("This is 3rd say message");
}

doA(function(){
    doB()
})


function LoadNews(cb){
        console.log("loaded....");
        setTimeout(() => {
            cb(
                [
                    {id:1, title:"a"},
                    {id:2, title:"b"},
                    {id:3, title:"c"},
                    {id:4, title:"d"},
                    {id:5, title:"e"},
                    {id:6, title:"f"},
                    {id:7, title:"g"},
                    {id:8, title:"h"},
                    {id:9, title:"i"},
                ]
            )
    }, 2000)
   
}


LoadNews(function(result) {
        console.log(result);
        console.log("Load complete")
    })


