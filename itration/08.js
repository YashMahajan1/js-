 //REDUSE
 const NUM =[1,2,3,4,5,6,78,]

  let TT =NUM.reduce((ACCUMALTER,CURRENTVALUE)=>{

    return ACCUMALTER+CURRENTVALUE
 },0)
// console.log(TT);

 const SHOOPINGCARD= [
    {
    ITEMP :100,
    ITEMNAME : "PEANUTS"},

    {
    ITEMP :100,
    ITEMNAME : "ONION"}
 ]
 let PRISETOPAY =SHOOPINGCARD.reduce((ACCUMALTER,ITEM)=>{
    
 return ACCUMALTER+ITEM.ITEMP
 },0)
 console.log(`PRISETO IS ${PRISETOPAY}`);
 