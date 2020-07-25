const readline = require("readline-sync")
function novidadesPT(){
    println("Cetus : 1HR para o anoitecer")
}
function novidadesEN(){
    println("Cetus : 1HR for night")
} 


function println(message){
    console.log(message+"\n")
}
function welcome(lang) {
    switch (lang) {
        case null:
        case "PT":
            println("========= Cetus Bot =========")
            println("Cetus bot e um operador tenno que verifica as condicoes do tempo da terra.")
            var verificacao = readline.questionInt("Deseja ver o horario da terra ? 1- Sim 0- Não")
            if(verificacao == 1){
                novidadesPT()
            }else if(verificacao == 0){
                welcome("PT")
            }else{
                println("Opção invalida")
            }
            break;
        case "EN":
            println("========= Cetus Bot =========")
            println("Cetus bot it's an tenno operator that verify the conditions of earth.")
            var verificacao = readline.questionInt("Do you want to know the time on earth ? 1- Yes 0- No")
            if(verificacao == 1){
                novidadesEN()
            }else if(verificacao == 0){
                welcome("EN")
            }else{
                println("Invalid option")
            }
            break;

        default:
            println("Em desenvolvimento.")
            break;
    }


}

welcome("EN")


