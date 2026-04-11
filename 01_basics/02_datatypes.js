"use strict";  //this treats all js code as newer version

// alert(3+3) //we are using node.js, not browser

/*documentations
    tc69
    mdn */

//datatypes

let name= "gourav"
let age= 123 // number =>2^52 size
let isyes= false

//bigint
// string=> ""
// boolean
// null => standalone value
// undefined => say that any value is not assigned
// symbol => unique 


// object

console.log(typeof age , typeof null, typeof undefined)
// null ka type object hai



// Primitive: always pass by value
//  7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference(Non Primitive) : passed by reference
//  Array, Objects, Functions

// js is dynamically typed


const id = Symbol('234')
const anotherid = Symbol('234')
console.log( id === anotherid)  //false


const myfunc= function(){
    console.log("hello world");
}

myfunc();
// all primitive datatypes are stored in stack and all non primitive datatypes are stored in heap
// object and pass by reference concept

let userOne = {
    email: "gourav@gmail.com",
    name: "gourav"
}
let userTwo= userOne;
userTwo.email= "hello@gmail.com"; // here value is passed by reference

console.log(userOne.email +"\n"+ userTwo.email)
