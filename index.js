//Basic math functions

//'add()' is a valid function
//add(a, b) adds two numbers and returns the result
function add(a, b){
  return a + b;
}

//'subtract()' is a valid function
//subtract(a, b) subtracts b from a and returns the result
function subtract(a, b){
  return a - b;
}

//'multiply()' is a valid function
//multiply(a, b) multiplies two numbers and returns the result
function multiply(a, b){
  return a * b;
}

//'divide()' is a valid function
//divide(a, b) divides a by b and returns the result
function divide(a, b){
  return a / b;
}

//increment(n) increments n and returns the result
function increment(n){
  n++;
  return n;
}

//decrement(n) decrements n and returns the result
function decrement(n){
  n--;
  return n;
}

//makeInt(n)
//parses n as an integer and returns the parsed integer
//assumes base 10
//returns NaN as appropriate
function makeInt(n){
  n = parseInt(n, 10); 
  //for "reasons", Javascript allows reassigning the original variable in the makeInt(n) statement above
  //the method called parseInt needs the second argument of 10 here to choose the base number type (radix)
  return n;
}

//preserveDecimal(n)
//preserves n's decimals (it parses n as a floating point number) and returns the parsed number
//returns NaN as appropriate
function preserveDecimal(n){
  return parseFloat(n);
}