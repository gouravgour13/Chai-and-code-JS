// function one(){
//     let username= "gourav"
//     console.log(this.username);//this ka context only works in objects not in functions
// }

// one()

// // we can also declare a function like this
// const two = () => {
//     let username= "gourav"
//     console.log(this);
// }

// two()
//difference bet arrow finction and normal function
const obj = {
    name: "gourav",
    greet: function () {
        console.log(this.name);
    }
}
obj.greet(); // gourav

const obj2 = {
    name: "gourav",
    greet: () => {
        console.log(this.name);
    }
}
obj2.greet(); // ❌ undefined

//IIFE functions(Immidiately invoked function expressions)

(function one(){  //named IIFE
    console.log(`hello world`);
    
})();
//can also be used for arrow functions

(() => {  // unnamed IIFE
    console.log(`hello world second time`);
    
})();