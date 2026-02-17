const promi1 = new Promise(function(RESOLVE,REJECT){
 //  DO AN async TASK
 //DB CALL,CRIPTOGRAPHY
 setTimeout(function(){
    console.log("TASK");
    RESOLVE()
 },1000)
})

promi1.then(function(){
    console.log("PROMISES CONSUMED");
    
})

const promi2 = new Promise(function(RESOLVE,REJECT){
      setTimeout(function(){
        RESOLVE({
            NAME:"YASH",
            MAIL:"YASH@123"
        })
      },1000)
})
promi2.then(function(DATA){
console.log(DATA);

})

const promi3 = new Promise(function(RESOLVE,REJECT){
    setTimeout(function(){
         let ERROR = false;
         if(!ERROR){
            RESOLVE({USNAME:"YASH",PASS:"123"})
         }else{
            REJECT("ERROR SOMETHING NOT RIGHT")
         }
    } ,1000)
})

promi3.then(function(USER){
    console.log(USER);
    return USER.USNAME
    

}).then(function(USER){
    console.log(USER);
    
}).catch(function(ERROR){
    console.log(ERROR);
    
}).finally(function(){
    console.log("THE PROMIS IS ROR RE");
    
})

const promi4 = new Promise(function(RESOLVE,REJECT){
    setTimeout(function(){
         let ERROR = true;
         if(!ERROR){
            RESOLVE({USNAME:"YASH",PASS:"123"})
         }else{
            REJECT("ERROR JS NOT RIGHT")
         }
    } ,1000)
})
async function CONSUMEPROMIS4() {
    try{
    const RESPONCE = await promi4
    console.log(RESPONCE);
    }catch(ERROR)
    {
        console.log("HANDEL ERROE");
        
    }
}
CONSUMEPROMIS4()

async function URL() {
    try{
   const RESPONCE =  await fetch("https://randomuser.me/api")
    const A =  await RESPONCE.json()
    console.log(A);}
    catch(ERROR){
        console.log(ERROR);
        
    }
    
}
URL()