var sla;
function ComputerChoice() {
    sla = Math.random();
    const escolha = Math.floor(sla * (3-1+1)-1);
    return escolha
}

function Userchoice (c){
    if(c === "Pedra") {
        console.log("Voce escolheu Pedra");
        return -1;
    } else if (c=== "Tesoura") {
        console.log("Voce escolheu Tesoura");
        return 0;
    } else if (c== "Papel") {
        console.log("Voce escolheu Papel");
        return 1;
    } else { 
        console.log("Escolha Invalida")
        return undefined
    }
    }


function Game() {
    var EscolhaJogador = prompt("Pedra papel ou tesoura?");
    var escolhaComputador = ComputerChoice();
    var escolhaUsuario = Userchoice(EscolhaJogador);

    if (escolhaUsuario !== undefined) {
        console.log("Escolha do Computador: " + escolhaComputador);
        console.log("Escolha do Usuário: " + escolhaUsuario);

        if (escolhaUsuario === escolhaComputador) {
            console.log("Empate (50/50)");
        } else if (escolhaUsuario=== -1 && escolhaComputador === 0 || 
            escolhaUsuario=== 0 && escolhaComputador === 1 ||
            escolhaUsuario=== 1 && escolhaComputador === -1) {
            console.log("Voce venceu!(parabuains)");
            }
            else  {
                console.log("Voce perdeu!(paia)");
                }
        }
}

function repetir() {
    var s= prompt('quer jogar quantos jogos?')
    for (i=0;i<s;i++) {
        Game()
    }
}

repetir()
