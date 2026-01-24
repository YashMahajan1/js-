 const  USEREMAIL = []
 if(USEREMAIL.length===0){
    console.log("EMPTY ARRAY");//FOR EMPTY ARRAY
    
 }
 else{
    console.log("DO NOT RECIVER USER EMAIL");
    
 }

 //FALSE VALUE  
   //false,0,-0,BIGINT-0n,"",NULL,UNDEFINE,NAN
//TRUTHY VALUE
  //"0","FALSE"," ",[],{},FUNCTION(){}

//FOR EMPTY OBJECT

const OBJ = {}
if(Object.keys(OBJ).length===0){
    console.log("OBJECT EMPTY");
    
}


//NULLISH COALESCINGN OPERATION (??)


let VAL1 ;
VAL1 =10??12

let vl2 = null??100
let vl3 = undefined??100


console.log(VAL1);
console.log(vl2);
console.log(vl3);


//turnerry opertor
//CONDITION ? TRUE:FALSE

const ICETEAPRISE =100;

ICETEAPRISE >80 ? console.log("GRATER THEN 80") :console.log("LESS THEN 80");


