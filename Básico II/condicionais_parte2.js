
// muito util quando suavariavel possui valores especiicos


const permissoes = 'aluno'// aluno, professores, adimin

switch(permissoes){
    case "aluno":
        console.log("Voce so pode acessar as aulas")
        // se adiconar o break ele encerra o case e inicia o proximo, sem ele o switch executa todos sem parar
       break;

   case "professor":
    console.log("Voce pode adicionar e excluir aular");
    break;

   case "admin":
    console.log("Pode fazer oquer quiser");      
    break;

   default:
    console.log("Usuario nao identificado")
}
