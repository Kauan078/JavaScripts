// booleanos são aqueles que nospermitem fazer comprações e nos retornam verdadeiro ou falso

const numero1 = 10;
const numero2 = 12;

// operação de igualdade ==, operação == compara só o valor e não o tipo, já com === compara o valor e o tipo
console.log(numero1 == numero2);
console.log(numero1 === numero2);
console.log(numero1 === "10");

// operação de diferença, assim como o de igualdade != compara só o valor, ja !== compara os dois
console.log(numero1 !== "10")
// operação de comparação, > maior que, < menor que, <= menor e igual,  >= maior e igual

console.log(numero1 > numero2);

const idadePessoa1 = 16;
const idadePessoa2 = 22;

// &&(and) (e), ||(OU)
console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18);
console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18);

console.log(!true);
console.log(!(idadePessoa1>=18));//retorna se a pessoa é menor de idade