const nota1 = 10;
const nota2 = 8;
// operadores matemáticos +, -, *, /, % (resto), **(exponenciação)

const somaDasNotas = nota1 + nota2;
let   mediaDasNotas = somaDasNotas / 2;

mediaDasNotas = (nota1 + nota2) / 2//não faz precedencias aritiméticas, no caso tem que colocar o parenteses para colocar preferencia
console.log("Soma das Notas =", somaDasNotas);
console.log("Média das Notas =", mediaDasNotas);

const numero = 16;
const raizQuadrada = Math.sqrt(numero)

console.log("raiz quadrada de 16 =", raizQuadrada)//importa a biblioteca math e a operação de raiz quadrada .sqrt, para fazer a operação 