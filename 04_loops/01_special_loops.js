
// for of loop

const arr = [1, 2, 3, 4, 5]

for(const i of arr){
    // console.log(i);
}


//maps
const map = new Map()
map.set('In',"India")  // single then double quote
map.set('USA',"united states of America")
map.set('Fr',"France")
map.set('In',"India") //stores only unique values , so it will be stored only once
// console.log(map);

for(const [key, value] of map){  //destructuring of map
    //console.log(`key: ${key}, values: ${value}`);
    
}

//for of loop doesn't works on obects so we use for in loopj
const myobj = {
    js: "javascript",
    cpp: 'c++',
    rb: "ruby"
}

for (const key in myobj) {
    // console.log(key, myobj[key]);
}

const coding = ["js", "cpp", "java", "python"]

coding.forEach( function (item, index, arr){
    // console.log(item, index, arr); 
})

//generally the data we get from the server is in the format of array of objects
const myCoding = [
    {
        languageName: "javascript",
        fileName: "js"
    },
    {
        languageName: "python",
        fileName: "py"
    },
    {
        languageName: "cpp",
        fileName: "cpp"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.languageName);
})