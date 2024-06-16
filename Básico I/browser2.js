
//importa uma biblioteca do node para utilizar um promp no node
const prompt = require('readline-sync')
const idade = prompt.question ("Qual e sua idade? ");


//Converção Manual
const idadeNumber = Number(idade);// transforma a variavel desejada para number

console.log( idadeNumber, typeof idadeNumber);//ele le tudo como string pq ele não saber oq o usuario irá escrever

console.log(String(10), typeof String(10));//convertendo para string

console.log(Boolean(-1), typeof Boolean(-1));

//Coerção Implícita

//transforma tudo em string quando é soma, agora nas outras operações transforma em number 
console.log(1 + '10');
console.log(10 - '5');