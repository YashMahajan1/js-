// ARRAY 
//IN JS ARRAYS IT IS THE RESIZEABLE WE CAN ADD OR DEDUCT ELE
//ARRAY IS COLLECTION OF DATA

let ARRAY = [1,1,12,23,43,2]

let  nrry = ["y","b","f"]

let rrrr = new Array(1,1,22,33,22,111)
console.log(ARRAY[0]);
console.log(nrry);

// ARRYA METHOD
nrry.push(7)

console.log(nrry);
nrry.pop()
console.log(nrry);
nrry.unshift(10)
// IT SHIFT ALL ARRAY VALUE
console.log(nrry);
nrry.shift()
console.log(nrry);
console.log(nrry.includes("j"));
console.log(nrry.indexOf(3));


let NV = nrry.join() //IT CONVER ARRAY IN STRING FORMAT  AFTER JOIN
console.log(NV);

//SLICE AND SPLICE

console.log(rrrr);
console.log(rrrr.slice(1,3))// IN SLICE ARRAY IS  AS IT IS 
console.log(rrrr);

console.log(rrrr.splice(1,3)); // IN SPLICE ARRAY WAS MANUPULETED OR CHANGE
console.log(rrrr);

