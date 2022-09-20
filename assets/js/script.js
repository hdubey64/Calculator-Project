// let firstNumber = 10;
// let secondNumber = 20;
// let calculat = "+";
// function myCalculater(firstNumber, calculat, secondNumber) {
//    let result = `${firstNumber} ${calculat} ${secondNumber}`;
//    return result;
// }

// myCalculater();

function add() {
   let firstNumber = document.querySelector("#num1").value;
   let secondNumber = document.querySelector("#num2").value;

   let result = document.getElementById("result");

   result.innerHTML = parseInt(firstNumber) + parseInt(secondNumber);
}
function minus() {
   let firstNumber = document.querySelector("#num1").value;
   let secondNumber = document.querySelector("#num2").value;

   let result = document.getElementById("result");

   result.innerHTML = parseInt(firstNumber) - parseInt(secondNumber);
   console.log(firstNumber);
}
function multiply() {
   let firstNumber = document.querySelector("#num1").value;
   let secondNumber = document.querySelector("#num2").value;

   let result = document.getElementById("result");

   result.innerHTML = `Your Result Is :- ${
      parseInt(firstNumber) * parseInt(secondNumber)
   }`;
}
function divide() {
   let firstNumber = document.querySelector("#num1").value;
   let secondNumber = document.querySelector("#num2").value;

   let result = document.getElementById("result");

   result.innerHTML = `Your Result Is :- ${(
      parseInt(firstNumber) / parseInt(secondNumber)
   ).toFixed(2)}`;
}

function remainder() {
   let firstNumber = document.querySelector("#num1").value;
   let secondNumber = document.querySelector("#num2").value;

   let result = document.getElementById("result");

   result.innerHTML = `Your Result is : ${(
      (parseInt(firstNumber) / parseInt(secondNumber)) *
      100
   ).toFixed(2)}%`;
}
