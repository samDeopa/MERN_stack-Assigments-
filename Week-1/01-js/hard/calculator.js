/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/


class Calculator {
  constructor(){
    this.result =0;
  }
  add( n1,  n2 ){
    return n1+n2;
  }
  sub( n1,  n2 ){
    return n1*n2;
  }
  mul( n1,  n2 ){
    return n1*n2;
  }
  div( n1,  n2 ){
    return n1/n2;
  }
}
try{
  let input = "2 +2 *5 a+5";
  let calc = new Calculator();
  let str ="";
  for(let i=0;i<input.length;i++){
    let char = input.charAt(i);
    if( isNaN(char) && (char!="+" && char!="-" && char!="/" && char!="*" && char!=" ") ){
      throw("Not a valid string");
    }else if(char != " "){
      str+=char;
    }
  }
  console.log(str);
}
catch( e){
    console.log(e);
}

  
  



module.exports = Calculator;
