const prompt = require('readline-sync');

const idade = Number(prompt.question ("Qual e sua idade ? "))

const maiorDeIdade = idade >= 18;



//  if e else
if ( maiorDeIdade ) {
    
console.log("Você é maior de idade!");

} else {
    console.log("Você é menor de idade");
}

const mediaDoAluno = 9

if (mediaDoAluno >= 7) {
    
    console.log("VOCÊ FOI APROVADO!😎😁");

} else if(mediaDoAluno > 5){
    console.log("Você vai para prova final")

}else{
    console.log("Você foi reprovado");
}

const CNH = String(prompt.question ("Voce tem CNH ? \n \n [1] sim \n [2] nao\n Selecione: \n"))


if (idade >= 18 && CNH == 1) {

    console.log("Voce pode dirigir")
    
} else {
    
    console.log("Voce  não pode dirigir")
}
