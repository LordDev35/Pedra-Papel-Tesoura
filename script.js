var sla;
function ComputerChoice() {
    sla = Math.random();
    const escolha = Math.floor(sla * (3-1+1)-1);
    return escolha
}
console.log(ComputerChoice())