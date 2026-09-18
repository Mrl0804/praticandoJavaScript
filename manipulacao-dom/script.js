const elementos = document.querySelectorAll(".texto");

//! Percorrendo a lista imprimindo cada um dos elementos
elementos.forEach(elemento => console.log(elemento));

//? Percorrendo a lista e pegando cada texto dos elementos

elementos.forEach(elemento => console.log(elemento.innerText));

//! Alternando textos
elementos.forEach(elemento => {
    elemento.innerText = "Alterado";

    elemento.textContent = "alterado"; //Vem com a formatação do elemento
})

//? Trocando as tags
elementos.forEach(elemento => {
    elemento.innerHTML = "<h2>item</h2>";
})

//! Trocaar a cor do elememto
    elementos.forEach(elemento => {
        elemento.style.color ="#0000FF";
    })



//* EVENTOS COM JS
//* o que são eventos? ações do usuário


//? Evento click
// const botao = document.getElementById("btn");

// botao.addEventListener("click", () => {
    
//     alert("Você clicou!!!");
// });


// //! Evento de digitação (input / keyup)
// const campo = document.getElementById("campo");
// const resultado = document.getElementById("resultado");


//? Input
//? Evento input -> dispara sempre que digita, em tempo real
// campo.addEventListener("input", () => {
//     //value -> o que esta sendo digitado dentro do campó
//     resultado.innerText = campo.value;

// })
//! Keyup
// campo.addEventListener("keyup", () => {
//     //value -> o que esta sendo digitado dentro do campó
//     resultado.innerText = campo.value;

// })


//? Evento mouse
// const elemento= document.getElementById("troca-cor");

// //* mouseover -> quando passar o mouse por cima do elemento
// elemento.addEventListener("mouseover", () => {
//     elemento.style.backgroundColor = "#ff0000";
// })

// //* mouseout -> quando o mouse sai do elemento
// elemento.addEventListener("mouseout", () => {
//     elemento.style.backgroundColor = "";
// })

//* mousemove
//*pega a posição do mouse

// document.addEventListener("mousemove", (evento) => {
//     console.log(`posicao X: ${evento.clientX}, posicao Y: ${evento.clientY}`);
    
// })


//! EVENTO DE FORMULÁRIO (submit)
//! o comportamento padrao do formulário é recarregar a página ao enviar o submit
// const form = document.querySelector("form"); // pegando direto pela tag form

// form.addEventListener("submit", (e) => {

//     //evita o comportamento padrao do formulário
//     e.preventDefault();

//     const nome = document.getElementById("nome").value 

//     console.log(`Nome: ${nome}`);
    
// })

// //? Criando elementos na pagina
// const novoElemento = document.createElement("p"); //Cria o elemento <p>
// novoElemento.innerText = "Elemento novo criado."; //Cria um texto no elemento

// const form = document.getElementById("form");

// form.appendChild(novoElemento);

// //! Criar um botão
// const botao = document.createElement("button");
// botao.innerText = "excluir elemento";

// form.appendChild(botao);

// botao.addEventListener("click", (e) => {
//     e.preventDefault();

//     novoElemento.remove();

//     //apagando direto do pai
//     //form.removeChild(novoElemento);
// })

//? Adicionando elementos em uma lista através de um input
const input = document.getElementById("input"); //input
const botao = document.getElementById("add"); // nbutton
const lista = document.getElementById("lista"); //ul

botao.addEventListener("click", () => {
    const valorDigitado = input.value; //Pega o valor que foi digitado dentro da caixinha/input

    const li = document.createElement("li"); //Criando <li>
    li.innerText = valorDigitado;

    //colocando o filho <li> dentro do pai <ul>
    lista.appendChild(li);

    input.value = "";
})





