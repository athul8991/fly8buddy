const { isObjectLiteralElement } = require("typescript");

//  leap memmory
var num = 10;

// heap memmory
var obj ={
    objNum:100
} 

console.log("before func",obj,num);


function hai(name,fnum){

    name.objNum +=10;
    fnum +=10

    // num +=20;

    console.log("function:",name.objNum,fnum);
    hoi(fnum)


}

hai(obj,num)


function hoi(data){
    console.log(data+50);
}

console.log("After fun",obj,num);