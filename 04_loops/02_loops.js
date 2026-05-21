//forEach does not returns any value
//it automatically returns
const nums= [1,2,3,4,5,6,7,8,9,10];

// const newNums = nums.filter( (num) => num > 4)

// const newNums = nums.filter( (num) => {
//     return num > 4
// } )


//map parameter
const mynums= [1,2,3,4,5,6]
//automatically returns 
// const newnums = mynums.map((num) => num + 10)
// console.log(newnums);

//or can return explicitly
const newnums = mynums.map((num) => {return num + 10})
console.log(newnums);

//chaining 
 const newnum2 = mynums
                .map((num) => num+10)
                .map((num) => num+1 )
                .filter( (num) => num < 15 )

console.log(newnum2);