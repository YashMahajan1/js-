//####################### MEMORY IN JS ########################//

//1 = STACK  (PRIMITIVE)  IN STACK M/M WE GET A COPY

//2 = HEAP   (NON PRIMITIVE) REFRENCE TO ORIGENAL M/M


 let MYBUSINESSS = "BALAJI KRUPA"
 let COUSTMER = MYBUSINESSS

 COUSTMER = "YASH MAHAJAN"

console.log(MYBUSINESSS);//IT STORED AT STACK AS COPY
console.log(COUSTMER);

let USERONE= {  

     email : "EHDBDB@BADB.COM"
 }


let USERTWO = USERONE 

USERTWO.email = "YASHMAHAJAN.COM"

console.log(USERONE.email);
console.log(USERTWO.email);



