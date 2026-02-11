## project 2
```
JAVASCRIPT 
const form = document.querySelector("form")
form.addEventListener("submit",function(s){
  s.preventDefault()

  
 const height = parseInt(document.querySelector("#height").value)
 const weight = parseInt(document.querySelector("#weight").value)
 const results = document.querySelector("#results")


 if (height<0|| isNaN(height)){
   results.innerHTML=`please give a valid height${height}`
 }
 else if( weight<=0|| isNaN(weight)){
  results.innerHTML=`please give a valid weight${weight}`
}
else{
  const bmi = (weight/((height*height)/10000).toFixed(2))

  // show it on the results
  const re = results.innerHTML=`${bmi}`

if(re<18.6){
  results.innerHTML="under weight"
}else if(re>18.6&&re<24.9){
  results.innerHTML="normal range"
}
else if(re>24.9){
  results.innerHTML="greater weight"

}}
 
})


```