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
            var menu = readline.questionInt("Gostaria de ver o Horário da terra(1) ou ver tutorial de como derrotar os Teralysts?(2) e 0 para sair")
            if(menu == 1){
                novidadesPT()
            }else if(verificacao == 0){
                welcome("PT")
            }else if(menu == 2){
                println("Ok, siga as instruções deste operador tenno : https://www.youtube.com/watch?v=kpM80HBWCz0")
            }else{
                println("Opção invalida")
            }
            
            
            break;
        case "EN":
            println("========= Cetus Bot =========")
            println("Cetus bot it's an tenno operator that verify the conditions of earth.")
            var menuEN = readline.questionInt("Do you want to know the time on earth ?(1) or do you want to know how to defeat the teralyst?(2) and 0 to exit")
            if(menuEN == 1){
                novidadesEN()
            }else if(menuEN == 0){
                welcome("EN")
            }else if(menuEN == 2){
                println("Ok, so now follow this tenno operator : https://www.youtube.com/watch?v=DZEiN4Wnmk4")
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


