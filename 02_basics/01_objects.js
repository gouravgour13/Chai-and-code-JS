// singleton

//object literals

const mySymb= Symbol("key1")

const Jsuser= {
    name: "Gourav",
    age: 20,
    location : "Bhilai",
    [mySymb]: "key2",
    email: "gourav@gmail.com",
    islogin: false,
    lastloginDays: ["monday", "sunday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser[mySymb]);

Jsuser.email="gourav@iit.com";
// console.log(Jsuser)
// Object.freeze(Jsuser);

// Jsuser.email="gourav@iitbh.com";

// console.log(Jsuser)

Jsuser.greetings = function(){
    console.log(`Hello Js user`);

}

Jsuser.greetings2= function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(Jsuser.greetings2())