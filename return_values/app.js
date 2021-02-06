/**
 * Return serve para:
 *  1 - Retornar o valor de uma funcao para quem a chamou
 *  2 - Terminar a funcao abruptamente
 *  
 *  O return pode voltar penas 1 valor por vez, esse valor pode ser um tipo
 * primitivo ou um objeto que contem varias informacoes dentro.
 */

function userInput(id) {
    return parseInt(document.getElementById(id).value);
}

function calcMajorNumber() {

    var number1 = userInput("num1");
    var number2 = userInput("num2");

    if(number1> number2){
        document.getElementById("result").textContent = `The number ${number1} is the biggest`;
    }else if(number2 > number1){
        document.getElementById("result").textContent = `The number ${number2} is the biggest`;
    }
}