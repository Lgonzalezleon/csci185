const addNumbers = (ev) => {
    let firstNumber= document.querySelector('#num1').value;
    let secondNumber= document.querySelector('#num2').value;
    let sum = Number(firstNumber) + Number(secondNumber);
    document.querySelector('#answer').textContent = sum;
  
}

const subtractNumbers = (ev) => {
    let firstNumber= document.querySelector('#num1').value;
    let secondNumber= document.querySelector('#num2').value;
    let sum = Number(firstNumber) - Number(secondNumber);
    document.querySelector('#answer').textContent = sum;
  
}

const multiplyNumbers = (ev) => {
    let firstNumber= document.querySelector('#num1').value;
    let secondNumber= document.querySelector('#num2').value;
    let sum = Number(firstNumber) * Number(secondNumber);
    document.querySelector('#answer').textContent = sum;
  
}

const divideNumbers = (ev) => {
    let firstNumber= document.querySelector('#num1').value;
    let secondNumber= document.querySelector('#num2').value;
    let sum = Number(firstNumber) / Number(secondNumber);
    document.querySelector('#answer').textContent = sum;
}

