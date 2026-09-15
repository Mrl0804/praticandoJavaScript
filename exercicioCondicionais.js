// BÁSICO


// 1

// let N = Number(prompt("Digite um número: "));

// if (N >= 18) {
//     console.log(" Você é maior de idade ");
// } else {
//     console.log(" Você é menor de idade ");

// }



// 2

// let N = Number(prompt("Digite um número: "));

// if (N > 0) {
//     console.log(" O numero é positivo ");
// }
// else {
//     console.log(" O numero é negativo ");
// }



// 3

// let N = Number(prompt("Digite um número: "));

// if (N >= 60) {
//     console.log("Aprovado");
// } 
// else {
//     console.log("Reprovado");
    
// }



// 4

// let N = Number(prompt("Digite um número: "));

// if (N > 0) {
//     console.log("O numero é positivo");
// }
//  else if (N < 0) {
//    console.log("O numero é negativo");
// }
// else {
//     console.log("O numero é zero");
    
// }


// 5

// let N = Number(prompt("Digite um número: "));

// if (0 < N >= 12) {
//     console.log("Criança");
// }
//  else if (12 < N > 18) {
//    console.log("Adolescente");
// }
// else {
//     console.log("Adulto");
// }



// 6

// let N = Number(prompt("Digite um número: "));

// if (N % 2 == 0) {
//     console.log("O numero é par");
// } 
// else {
//     console.log("O numero é impar");
    
// }


// INTERMEDIÁRIO

const num1 = parseFloat(prompt("Digite o primeiro número:"));
const operacao = prompt("Digite a operação (+, -, *, /):");
const num2 = parseFloat(prompt("Digite o segundo número:"));

let resultado;

// Verifica qual operação foi escolhida e realiza o cálculo
if (operacao === '+') {
    resultado = num1 + num2;
} else if (operacao === '-') {
    resultado = num1 - num2;
} else if (operacao === '*') {
    resultado = num1 * num2;
} else if (operacao === '/') {
    // Evita a divisão por zero
    if (num2 === 0) {
        resultado = "Erro: Não é possível dividir por zero!";
    } else {
        resultado = num1 / num2;
    }
} else {
    resultado = "Operação inválida!";
}

// Exibe o resultado na tela
alert("Resultado: " + resultado);
console.log("Resultado:", resultado);



