const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Password" ,  function(input) {
    tokens = input.split(' ')
 let numOfChar = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 0]
 let password = input 
 
 if (password.length > 10){
     console.log("correct")
 } if (password.length < 10){
     console.log("false")
 }
  
reader.close()





});
