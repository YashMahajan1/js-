//for  loop
for (let index = 0; index < 10; index++) {
    const element = index;
    if(element==5){
        console.log("5 IS BEST");
        
    }
    console.log(element);
    
    
}
for (let index = 0; index <= 10; index++) {
           console.log(`OUTER LOOP VALUE ${index} `);
           
    for (let I = 0; I < 10; I++) {
        console.log(`INNER LOOP VALUE${I}AND INNER LOOP${index}`);
        console.log( index +"*"+ I +'='+ index*I)
        
        
    }
    
}