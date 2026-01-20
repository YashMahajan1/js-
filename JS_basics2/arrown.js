// // THIS KEYWORD GIVE AN CONTEXT OF BEFORE THEM
// const USER = {
//     USERNAME: "YASSH",
//     PRISE : 100,

//     WELCOME: function(){
//         console.log(`${this.USERNAME},WELCOMME TO WEBSITE`);
        
//   console.log(this);
  
//     }
// }
// // USER.WELCOME()
// // USER.USERNAME="RAJU"
// // USER.WELCOME()

// //  console.log(this);//WHEN WE CALL THIS AT POINT IT SHOW EMPTY CONTEXT
// //THIS IS MOSTLY RUN IN OBJ IF NOT THEN IT SAY UNDEFINED


// function one(){ 
//     console.log(this);

// // WHEN WE DO THIS INSIDE THE FUNCTION IT SHOW THE MULTIPLE VALUESSSSSS
// }
// one()


//ARROW FUNCTION

const CHAI =(num1,num2)=> {
    
  return num1+num2;
}
//WHEN WE USE {}==  WE HAVE TO WRITE A RETRUN 
console.log
(CHAI(3,44))

//THIS IS ARROW FUN 


//IMPLICIT RETRUN====

// WHENUSE ( THEN NOT USE RETRUN)

const YY = (NUMM,NUMMM)=> ({USERNAME : "YASSH"})
console.log(YY(3,45));
