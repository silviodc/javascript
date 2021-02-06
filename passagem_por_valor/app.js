function userInput(number1, number2) {
    number1 = parseInt(document.getElementById("num1").value);
    console.log(number1);
    number2 = parseInt(document.getElementById("num2").value);
}

/**
 * Passagem por valor:
 * Os valores passados para outras funcoes sao valores, ou seja,
 *  (number, ou outro tipo primitivo) for alterado
 *  isso sera visivel apenas na funcao que os alterou.
 */

function calcMajorNumber() {
    var number1;
    var number2;

    console.log(number1+ " "+number2 );
    userInput(number1, number2);
    console.log(number1+ " "+number2 );

    if(number1> number2){
        document.getElementById("result").textContent = `The number ${number1} is the biggest`;
    }else if(number2 > number1){
        document.getElementById("result").textContent = `The number ${number2} is the biggest`;
    }
}