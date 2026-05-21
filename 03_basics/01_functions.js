// many things are same as cpp and python

// 13/4/26 2:04 am

function returnCart (...num1){ // this will take as many vals as possible and store them in an array
    return num1
}
console.log(returnCart(232, 423, 342, 123));

// passing objects to the function
const data = {
    name: "gourav",
    age: 21
}

function handleObject(obj){
    console.log(`username is ${obj.name} and age is ${obj.age}`);
    
}
handleObject(data)
// can also pass it like this
handleObject({
    name: "gour",
    age: 34
})

//similarly we can do it for arrays

