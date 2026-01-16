
// //FUNCTION IS BLOCK OF CODE WHICH IS USE TO ACCES THE MULTIPE CODE AT A TIMME

// console.log("D");
// console.log("EV");
// console.log("FFSFEC");

// //IF I WANT TO REWRITE THIS CODE 100 TIMES THEN I WILL USE FUNCTIION

// function MYFUN (){

// console.log("D");
// console.log("EV");
// console.log("FFSFEC");

// }

// MYFUN()



// // function ADDTWOVER(NUMM1,NUM2){
// //     console.log(NUM2+NUMM1);
    
// // }

// // ADDTWOVER(21,1212)
// // const RES = ADDTWOVER(11,111)
// // //IF I PRINT RES THEN NOT EXECUTE BECUSE WHEN WE WRITE A FUN NO RETRUNING ANY VALUE
// // console.log(RES);






// function newfun (num1,NUM2){
//     let RESS = num1+NUM2
//     return RESS;

// } 
//  RESS = newfun(111,222)
//  console.log(RESS);
 //WHEN WE RETRUN ANY VAR THEN WE CAN STORE AS AN A INSIDE OF THE VAR

 function LOGINUSERNAME (USERNAME){
    if(USERNAME=== undefined){
        console.log("PLEASE ENTER A NAME");
     return   
    }
    return `${USERNAME}JUST LOGIN`
 }

console.log( LOGINUSERNAME())
//IF I WRITE A RETRUN THEN IS NOT EXECUTE ANY AFTER LINE




function CALCULATECARTPRISE (...NUM11 ){
return NUM11;

}
console.log(CALCULATECARTPRISE(111,2331,2312131));





const USER = {

    USERNAME: "YASH",
    PRISE : 100
}

function OBJCALL(ANYOBJECT){
    console.log(`USERNAME IS ${ANYOBJECT.USERNAME} AND PRISE IS ${ANYOBJECT.PRISE}
         `);
    

}
OBJCALL(USER)






const MYARRAY= [100,12232,3,1332313,2]
function CALLARRAY (MYARRAY){
    return MYARRAY[0]

}
console.log(CALLARRAY(MYARRAY));
