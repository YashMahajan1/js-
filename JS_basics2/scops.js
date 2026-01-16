// //let A =  1222

// //const B =21133
// var C= 102

// if(true){
//     var C =19232739173817
// }
// console.log(C);


// // O/P WILL BE 1023ECT IT REWRITE IT

let A= 300                   //GLOBAL SCOP
if(true){
    let A=10
    const B=22
    console.log("inner",A);    //LOCAL/BLOCK SCOP
}
console.log(A);//outer
