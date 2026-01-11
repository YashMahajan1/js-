const y1 = ["11","111","2344"]
const y2 = ["211","2111","22344"]

//console.log(y1);
//y1.push(y2)
//console.log(y1);

//WHEN WE PUSH A TWO ARRAYS IN JS GET ALL TYPE DATA BECUSE IT WILL NOT CONCAT IT ADD AARRAY IN FRONT NEXT ARRAY
const YY = y1.concat(y2)
console.log(YY);
//BOTH DO WORK SAME//BUT IT CREAT A NEW ARRAY AND WHEN ASSIGEN A NEW VR TO STORE THE CONCATE

const newy =[...y1,...y2]
console.log(newy);
//SPRADE IS ALSO USE TO ADD TO ARRAY

const ARR = ["11","3334",["1","2","44",],3,["1",2],2]
let NN = ARR.flat(Infinity)
console.log(NN)

//CONVERT IT INTO ARRAY OR CHECK IF IT IS ARRAY OR NOT
console.log(Array.isArray("yASH"));
console.log(Array.from("yASH"));
console.log(Array.isArray({NAME : "YASH"}));//FALSE


let Y= 1222
let Z = 22123
let V = 31333


console.log(Array.of(Y,Z,V));
//TO CONVERT VER TO ARRAY
