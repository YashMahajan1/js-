 //MAPS
// IN MAP IT CAN NOT STORE AN DUPLICATE VALU
//MAP IS THE OBJECT WHICH IS STORE AS AN KEY -- VALUE  PAIR

 const mp = new Map()
mp.set("IN ","INDIA")
mp.set("USA ","UNITEDSTATEOFAMERICA")

 
 //console.log(mp);
 
for (const [key,VALUE] of mp) {
   //console.log(key,"----",VALUE);
   
   
}
const obj ={
   "gme1": "nf",
   "gme2" : "ehh"
}

// for (const [key1,vlue1] of obj) {
//    console.log(key1,"=",vlue1);  // for OF  not ITRATE OBJECCT
   
   
//}

for (const key in obj) 
    {
 console.log(`${key}for the${obj[key]}`);
 
}

const rrr =["JAVA","C++","PYTHAN"]
for (const key in rrr) {
    console.log(rrr[key]);
    
}
//IN FORIN IT TAKE A KEY THEN WE HAVE TO TAKE A VALUE LIKE OBJ[KEY]

 const mp1= new Map()
mp.set("IN ","INDIA")
mp.set("USA ","UNITEDSTATEOFAMERICA")

for (const key in mp1) {
    console.log(key);  //WE CANNOT USE MAP ITRATION UING THE FORIN
    
   
    
}

//FOREACH LOOP IN THE JS 
const VAL = ["12","318783718","313"]

// VAL.forEach( function (ITEM) {
//     console.log(ITEM);
    
// })
VAL.forEach((VAL1)=>{
    console.log(VAL1);
    
})
function PRINTME (ITEM){
    console.log(ITEM);
    
}
VAL.forEach(PRINTME)

VAL.forEach((ITEM,INDEX,ARR)=>{
    console.log(ITEM,ARR,INDEX);
    
})


const COODING =[
    {
        LANGUAGE :"JAVA",
        NAME : 'YASH'

    },
    {
        LANGUAGE :"JAVAN",
        NAME : 'YASHN'
    }
]
COODING.forEach((ITEM)=>{
    console.log(ITEM);
    

})

