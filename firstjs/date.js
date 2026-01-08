let MYDATE = new Date();
console.log(MYDATE.toString());
console.log(MYDATE.toDateString());
console.log(MYDATE.toLocaleDateString());

let newmyDAte = new Date(2023,0,24);
let newmyDAte1 = new Date(2023,0,24,2,2)
console.log(newmyDAte1.toLocaleString());

//console.log(newmyDAte.toDateString());


let MYDATE2 = new Date("2023-01-22");
console.log(MYDATE2.toDateString());

 
let TIMESTAMP = Date.now();
console.log(Math.floor(TIMESTAMP));

console.log(newmyDAte.getTime());
console.log(Math.floor(Date.now()/1000));


let DT = new Date()
console.log(DT);
console.log(DT.getMonth());

DT.toLocaleString("DEFULT",{
    weekday : "long"
})








//IN JS MONTH ARE START WITH A 0
 //BUT IF WE DECLEAR AS YY-MM-DD IT START WITH A 1