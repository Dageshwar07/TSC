"use strict";
var a = 5;
function abcd() {
    console.log(a);
}
var c = [1, 2, 3, 4, 5];
var cCopy = [...c]; 
var d = cCopy.pop(); 
console.log(c);     
console.log(cCopy);  
