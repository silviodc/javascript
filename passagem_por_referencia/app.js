function userInput(numeros) {
    numeros.number1 = parseInt(document.getElementById("num1").value);
    console.log(numeros.number1);
    numeros.number2 = parseInt(document.getElementById("num2").value);
}

/**
 * Passagem por referencia:
 * Os valores passados para outras funcoes sao referencias na memoria, ou seja,
 * se um objeto for alterado isso sera visivel em ambas as funcoes.
 */

function calcMajorNumber() {
    var numeros = {
        number1: Number,
        number2: Number
    } 

    console.log(numeros);
    userInput(numeros);
    console.log(numeros);

    if(numeros.number1> numeros.number2){
        document.getElementById("result").textContent = `The number ${numeros.number1} is the biggest`;
    }else if(numeros.number2 > numeros.number1){
        document.getElementById("result").textContent = `The number ${numeros.number2} is the biggest`;
    }
}