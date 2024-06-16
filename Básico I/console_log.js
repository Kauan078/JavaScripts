

// console.log é o comando mais basico para saida de  dados, e atravez dele você pode imprimir coisas no seu console que vai estar rodando o script, .log é para trazer uma informação

// Uma variável é um objeto capaz de reter e representar um valor ou expressão, pode ser criada no JS com o comando *var
//JavaScript possui uma tipagem fraca.
//JavaScript possui tipagem dinamica: infere os tipos de dados.
//Utilizar sempre Camel case, padrão do java script para variaveis com mais palavras.

var nomeDoAluno = "Kauan Vieira"; //string (texto), utilizar sempre aspas("")
var idade = 18;// js interpreta como number, não difere os tipos de numeros
var altura = 1.81;
var estudando = true; //bollean -- verdadeiro ou falso


console.log( nomeDoAluno,typeof nomeDoAluno);// typeof - mostra o tipo de variavel que é variavel


console.log(idade, typeof idade);

console.log(altura, typeof altura);

console.log(estudando, typeof estudando);

var semNada; // declarando uma variável
console.log(semNada);

var curso = 'front-end em React', topico = "JavaScript basico"//declarando  varias variaveis em uma linha só
console.log(curso, topico);

//não utilizar var em javascript, a uma opção melhor para declarar, let e const são melhores

let notaDoAluno = 10;// com let pode se alterar a variavel
const mediaDoAluno = 8;//não permite alterar a variavel pois ela é constante


notaDoAluno = 9

console.log(notaDoAluno);
console.log(mediaDoAluno);