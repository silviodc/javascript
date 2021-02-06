var number1;
var number2;
/**
 * Mesmo tendo uma variavel global, se um mesmo nome for declarado
 * dentro de uma funcao. As alteracoes irao ser visiveis apenas dentro
 * daquela funcao. Isso é, o javascript ignora a variavel GLOBAL com mesmo nome.
 * 
 * Tambem chamado de shadown scope
 */

function userInput() {
    var number1 = parseInt(document.getElementById("num1").value);
    console.log(number1);
    var number2 = parseInt(document.getElementById("num2").value);
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