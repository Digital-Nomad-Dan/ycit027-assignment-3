// Function to perform an asynchronous task
function asyncTask(data, callback) {
  // Simulating an asynchronous operation with a setTimeout
  setTimeout(function () {
    // Process the data
    let processedData = data.toUpperCase();

    // Invoke the callback function with the processed data
    callback(processedData);
  }, 2000); // Delay of 2 seconds
}

// Callback function to handle the processed data
function handleData(data) {
  console.log("Processed data:", data);
}

// Example usage: Performing an async task and handling the result
let inputData = "hello world";
asyncTask(inputData, handleData);

// Certainly! The term "Scope Chain" describes how variables and functions are found in JavaScript's nested scopes in a hierarchical sequence.
// A chain of scopes is formed, with each scope having access to both the variables and functions defined in its own and its outside scopes.
//Here is a sample of some code that illustrates the Scope Chain idea

// Global scope
var globalVariable = 'I am in the global scope';

function outerFunction() {
  var outerVariable = 'I am in the outer function';
  
  function innerFunction() {
    var innerVariable = 'I am in the inner function';
    
    // Accessing variables from different scopes
    console.log(innerVariable); // 'I am in the inner function'
    console.log(outerVariable); // 'I am in the outer function'
    console.log(globalVariable); // 'I am in the global scope'
  }
  
  innerFunction();
}

outerFunction();
