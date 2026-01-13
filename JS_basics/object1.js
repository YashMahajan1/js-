//SINGLRTONN IS NOTHING BUT OOBJ WHICH IS CREATED BY THE CONSTROCTOR
//let YY = new Object();
//OBJECT LITREAL
const SY = Symbol("KEY1")

const JSUSER ={
NAME : "YASH",
AGE : 21,
EMAIL : "YASH@GMAIL.COM",
[SY]: "KEY2",//  WHEN WE CALL SYMBOL WE HAVE TO REFFERANCE THROUGH THE []
ISLOGIN : false,
LOGINDAYS : ["MONDAY","SUNDAY"]

}

console.log(JSUSER.EMAIL);
console.log(JSUSER["EMAIL"]);

console.log(JSUSER[SY]);
//console.log( typeof JSUSER[SY]);

JSUSER.EMAIL ="YASHMAHAJAN@122"

//Object.freeze(JSUSER)
JSUSER.EMAIL ="YASHMAHAJAN111111111111111"
console.log(JSUSER["EMAIL"]);


JSUSER.greeting = function(){

    console.log(`HEY I AM FUNCTION,${ this.NAME}`);
    
}
console.log(JSUSER.greeting());

//console.log(JSUSER.greeting);