const pScore = document.getElementById('pScore');
const cScore = document.getElementById('cScore');
const scoreMessage = document.getElementById('mensaje');
const ganadores = document.getElementById('ganador');
const buttons = document.querySelectorAll('button');
let plScore = 0;
let comScore = 0;

function computerPlay() {
    let jugada = Math.round(Math.random() * (3 - 1) + 1);
    return jugada;
     }

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        scoreMessage.textContent = "empate!!";
        pScore.textContent = plScore;
        cScore.textContent = comScore;
    } else if(playerSelection == 1 && computerSelection == 2) {
        comScore++;
        scoreMessage.textContent = "Tu pierdes";
        pScore.textContent = plScore;
        cScore.textContent = comScore;
    } else if(playerSelection == 1 && computerSelection == 3) {
        plScore++;
        scoreMessage.textContent = "Tu Ganas!!";
        pScore.textContent = plScore;
        cScore.textContent = comScore;
    } else if(playerSelection == 2 && computerSelection == 1) {
        plScore++;
        scoreMessage.textContent = "Tu ganas!!";
        pScore.textContent = plScore;
        cScore.textContent = comScore;
    } else if(playerSelection == 2 && computerSelection == 3) {
        comScore++;
        scoreMessage.textContent = "Tu pierdes";
        pScore.textContent = plScore;
        cScore.textContent = comScore;
    } else if(playerSelection == 3 && computerSelection == 1) {
        comScore++;
        scoreMessage.textContent = "Tu pierdes";
        pScore.textContent = plScore;
        cScore.textContent = comScore;
    } else if(playerSelection == 3 && computerSelection == 2) {
        plScore++;
        scoreMessage.textContent = "Tu Ganas!!";
        pScore.textContent = plScore;
        cScore.textContent = comScore;
    }
}
const opciones = [1, 2, 3]

for (let i = 0; i < 3; i++) {
    buttons[i].addEventListener('click', () => {
        playRound(opciones[i], computerPlay())
        puntaje_pl = pScore.textContent;
        puntaje_com = cScore.textContent;
    let ganador = determinador(puntaje_pl, puntaje_com);
    if (ganador != false) {
        plScore = 0;
        comScore = 0;
        pScore.textContent = plScore;
        cScore.textContent = comScore;
        ganadores.textContent = ganador;
    }
    })
}
function determinador(p1, p2) {
    if (p1 > 5 || p2 > 5) {
        if(p1 === p2) {
        ganador = "empate";
    } else if(p1 > p2) {
        ganador = "p1 wins";
    } else {
        ganador = "pc wins";
    }
    return ganador;
    } else {
        return false;
    }
}


/*piedra.addEventListener('click', () => {
    playRound(1, computerPlay());})
papel.addEventListener('click', () => {
    playRound(2, computerPlay());})
tijera.addEventListener('click', () => {
    playRound(3, computerPlay());})*/

