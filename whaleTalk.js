const input = 'turpentine and turtles';

const vowels = ['a', 'e', 'o', 'u', 'i'];

let resultArray = [];


for (let i = 0; i < input.length; i++){
    
    for(let j=0; j < vowels.length; j++){
        if(input[i] === vowels[j])
         {     
          if( input[i] === 'e')
          {
            resultArray.push('ee');
          } 
          else if (input[i] === 'u' ) 
          {
            resultArray.push('uu');
          }
          else
          { 
            resultArray.push(vowels[j]);
          }
         }
    }
};

const resultUpperCase = resultArray.map(result => result.toUpperCase());

console.log(resultUpperCase.join(''));


  
