const a = 1; const b = 2; const c = 3;  
       
     (function firstFunction () {  //a=1, b=5, c=6
       const b = 5; const c = 6;  
       
       (function secondFunction () {  //a=1, b=8, c=6
         const b = 8;  
       console.log(`a: ${a}, b: ${b}, c: ${c}`);
         (function thirdFunction () {  //a=7, b=8, c=9
           const a = 7; const c = 9;  
       
           (function fourthFunction () {  //a=1, b=8, c=8
             const a = 1; const c = 8;  
           })()  
         })()  
       })()  
     })()

     //a: 1, b: 8, c: 6