var number1;
var number2;

/**
 * As variaveis sao declaradas fora das funcoes, e todas as alteracoes feitas
 * em alguma funcao sao visiveis em outras
 * 
 * Desvantagens: Pode consumir muita memoria do computador ou dificil de gerenciar
 * todas as variaveis globais
 */

function userInput() {
    number1 = parseInt(document.getElementById("num1").value);
    console.log(number1);
    number2 = parseInt(document.getElementById("num2").value);
}

function calcMajorNumber() {

    
    console.log(number1+ " "+number2 );
    userInput();
    console.log(number1+ " "+number2 );

    if(number1> number2){
        document.getElementById("result").textContent = `The number ${number1} is the biggest`;
    }else if(number2 > number1){
        document.getElementById("result").textContent = `The number ${number2} is the biggest`;
    }
}