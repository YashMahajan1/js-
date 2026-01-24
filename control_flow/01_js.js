
// //if 
// const ISLOGIN =true
// TEM = 42
// if(TEM<50)

// {
//     console.log("YES");
    
// }else{
// console.log("not");
// }

// //<,>,<=,>=,==(FOR CAMPER),!=,===(IT CHECK  AND CAMPARE TYPE ALSO),=(TO ASSIGN)


// const BAL =1000
// // if(BAL>500){
// //     console.log("GRETAR THEN 500");
    
// // }

// if(BAL>500) console.log("YES");  //IMPLICIT SCOPS

// if(BAL<1500){
//     console.log("YES");

    
// }
// else if(BAL<1250){
//     console.log("YES");
    
// }
// else{
//     console.log("NO");
    
// }

const USERLOGIN = true
const DB =true
const LOGGINFROMGOOGAL = false
const LOGGINFROMEMAIL = true

if(USERLOGIN && DB){//&& IT CHECK  BOTH
 console.log("ALLOW");
 
}
if(LOGGINFROMEMAIL||LOGGINFROMGOOGAL){//IT CHECK ATLEST ONE WILL EXECUTE
    console.log("ALLOW");
    
}