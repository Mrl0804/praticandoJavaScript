// let nome = "Raissa";
// let idade = 18;

//! CONCATENAÇÃO
// console.log("Nome: " + nome + ", idade: " + idade);

//! INTERPOLAÇÃO
// console.log(`Nome: ${nome}, idade: ${idade}`);

// console.log(typeof nome);
// console.log(typeof idade);


// let soma = "5" + 3; // 53
// let sub = "5" - 3; // 2

// console.log(soma);
// console.log(sub);

// console.log(typeof soma);
// console.log(typeof sub);

// convertendo valores
// let numero = "ab" // string

// let convertido = Number(numero) // converte o valor para number

// console.log(typeof convertido);


//! OPERADORES RELACIONAIS

//! VALIDA IGUALDADE DE VALOR (SOMENTE VALOR)
//! "10" == 10 -> true

//! VALIDO IGUALDADE DE VALOR E TIPO DE DADO
//! "10" === 10 -> false


// &&
// ||
// !

// let opcao = 2

// switch(opcao) {
//     case 1:
//         hgdhasghd
//         break;
//     case 2:
// }


//! ESTRUTURA DE REPETIÇÃO
// let frutas = ["Maçã", "Banana", "Acerola", "Uva"];

// console.log(frutas);

// frutas.forEach(function(fruta) {
//     console.log(`Fruta: ${fruta}`);
// })

// frutas.forEach(fruta => console.log(`Fruta: ${fruta}`));


// FUNÇÕES NATIVAS JS

//! FUNÇÃO MAP()
//! Percorre uma lista e cria uma nova lista com base em uma condição

//let numeros = [1, 2, 3, 4]

//let numerosDobrados = numeros.map(function(num) {
//   return num * 2
//})

// numerosDobrados = [2, 4, 6, 8]
//console.log(numerosDobrados);

// ou assim:
//! Arrow function com retorno implícito

//let numerosDobradosArrow = numeros.map(num => num * 2);

//! FILTER
//Filtra os elementos com base em uma condição

//let numeros = [5, 10, 15, 20]

//let maioresQueDez = numeros.filter(num => num > 10);

//console.log(maioresQueDez);

//!  REDUCE
//!Reduz os valors de um array para um unico valor

//let numeros = [1, 2, 3, 4]

//! Acumulador inicia em 0
//! variavel auxuiliar
//! Acumulador começa em 0 e soma com o auxiliar ate o ultimo valor do array

//let soma = numeros.reduce((acumulador, auxiliar) => acumulador + auxiliar, 0);

//console.log(soma);

// !FIND
// !Retorna o primeiro elemento que atende a condição

// let produtos = [
//    {id:1, nome: "teclado", preco: 50},
//    {id:2, nome: "mouse", preco: 30},
//    {id:2, nome: "livro", preco: 30}
// ]

// let item = produtos.find(produto => produto.id === 2);

// console.log(item);

// ! DIFERENÇA ENTRE FILTER E FIND
// ! find retorna somente o primeiro elemento que ele encontra com a condição
// ! filter retorna todos os elementos que encontra com a condição
// let itemFiltrado = produtos.filter(produto => produto.id === 2);

// console.log(itemFiltrado);

//! SPLIT   
//!divide a string em partes, transformando em um array

// let frase = "Js é top";

// let palavras = frase.split(" ");
// console.log(palavras);

//! TRIM
//! trim remove espaços no inicio e fim de string

// let nome = "       paulo"
// let nomeLimpo = nome.trim();

// console.log(nome);
// console.log(nomeLimpo);

//! INCLUDES
// verfica se existe um valor dentro de uma lista e retorna um valo booleano

// let frutas = ["maçã", "banana"];

// let frutasIncludes = frutas.includes("maçã");
// console.log(frutasIncludes); // true

// let nome = "KÉSSIA";
// let cargo = "instrutora";

// console.log(nome.toLowerCase()); //kessia
// console.log(cargo.toUpperCase()); //INSTRUTORA

//! FOREACH

// let nomes = ["guilherme", "joao", "maria"];

// nomes.forEach(nome => console.log(nome));

//! SOME
//! verifica se pelo menos um item atende a condição, retornando um booleano

// let numeros = [1, 3, 5, 8];

// let temPar = numeros.some(num => num % 2 === 0);
// console.log(temPar); //true

//! EVERY
//! verifica se TODOS os elementos atendem a condição

// let todosPares = numeros.every(num => num % 2 === 0)
// console.log(todosPares); //false

//! SORT
//! ordena os elementos do array

let numeros = [3, 10, 5, 2, 4];
let letras = ["x", "a", "c", "h"];

letras.sort();
console.log(letras);


numeros.sort((a, b) => a - b);
console.log(numeros);















