const obj1= { 1: "a", 2: "b" }
const obj2= { 3: "a", 4: "b" }
const obj4= { 5: "a", 6: "b" }

// const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);


const mySymb = Symbol("key1")
const Jsuser= {
    name: "Gourav",
    age: 20,
    location : "Bhilai",
    [mySymb]: "key2",
    email: "gourav@gmail.com",
    islogin: false,
    lastloginDays: ["monday", "sunday"]
}


// console.log(Object.keys(Jsuser)); //returns an array
// console.log(Object.values(Jsuser)); //returns an array
// console.log(Object.entries(Jsuser)); //converts each key value pair as array

// console.log(Jsuser.hasOwnProperty("name"))

//13/4/26  01:35am

const course= {
    coursename: "js ",
    price: 234,
    courseinstruter: "gourav"
}

const {courseinstruter: instructer} = course

console.log(instructer);
