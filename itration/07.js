 const mynum =[1,2,34,4423,342342,31,41,2334,134432,42,]

 // newnum = mynum.map((num)=>{
  // return num+10

 //})
let newnum = mynum.map((num)=>{
    return num*10

}).map((num)=>{
    return num+1
}).filter((num )=>{
    return num>50
})
 console.log(newnum);
 