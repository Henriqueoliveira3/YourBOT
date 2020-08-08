const readline = require("readline-sync")
function novidadesPT() {
    println("Cetus : 1HR para o anoitecer")
}

function novidadesEN() {
    println("Cetus : 1HR for night")
}

function println(message) {
    console.log(message + "\n")
}

function welcome(lang) {
    var saida = 1
    while (saida !== 0) {
        switch (lang) {
            case null:
            case "PT":
                println("========= Cetus Bot =========")
                println("Cetus bot e um operador tenno que verifica as condicoes do tempo da terra.")
                var menu = readline.questionInt("Gostaria de ver o Horário da terra(1) ou ver tutorial de como derrotar os Teralysts?(2) e 0 para sair")
                if (menu == 1) {
                    novidadesPT()
                    saida = readline.questionInt("Gostaria de sair 0/ Senão qualquer outro número")
                } else if (menu == 2) {
                    println("Ok, siga as instruções deste operador tenno : https://www.youtube.com/watch?v=kpM80HBWCz0")
                    saida = readline.questionInt("Gostaria de sair 0/ Senão qualquer outro número")
                }else if(menu == 0){
                    saida = 0
                }else {
                    println("Opção invalida")
                }
                break;
            case "EN":
                println("========= Cetus Bot =========")
                println("Cetus bot it's an tenno operator that verify the conditions of earth.")
                var menu = readline.questionInt("Do you want to know the time on earth ?(1) or do you want to know how to defeat the teralyst?(2) and 0 to exit")
                if (menu == 1) {
                    novidadesEN()
                    saida = readline.questionInt("Would you like to exit 0/ Else insert any number")
                } else if (menu == 2) {
                    println("Ok, so now follow this tenno operator : https://www.youtube.com/watch?v=DZEiN4Wnmk4")
                    saida = readline.questionInt("Would you like to exit 0/ Else insert any number")
                }else if(menu == 0){
                    saida = 0
                }else {
                    println("Invalid option")
                } 
                break;

            default:
                println("Em desenvolvimento.")
                break;
        }


    }
}

welcome("EN")


