function computerPlay() {
    let jugada = Math.round(Math.random() * (3 - 1) + 1);
    switch (jugada) {
        case 1:
            jugada = "Piedra";
            break;
        case 2:
            jugada = "Papel";
            break;
        case 3:
            jugada = "Tijera";
            break;
    } return jugada
     }


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return  playerSelection + " empata con " + computerSelection;
    } else if (playerSelection.toLowerCase() != computerSelection.toLowerCase() && playerSelection.toLowerCase() == "piedra") {
        switch (computerSelection) {
            case "Papel":
               return "Tu pierdes! " + computerSelection + " le gana a " + playerSelection;
                break;
            case "Tijera":
                return "Tu ganas! " + playerSelection + " le gana a " + playerSelection;
                break;
        } 
    } else if (playerSelection.toLowerCase() != computerSelection.toLowerCase() &&  playerSelection.toLowerCase() == "papel") {
        switch (computerSelection) {
            case "Piedra":
                return "Tu ganas! " + playerSelection + " le gana a " + playerSelection;
                break;
            case "Tijera":
                return "Tu pierdes! " + computerSelection + " le gana a " + playerSelection;
                break;
        }
    } else if (playerSelection.toLowerCase() != computerSelection.toLowerCase() &&  playerSelection.toLowerCase() == "tijera") {
        switch (computerSelection) {
            case "Papel":
                return "Tu ganas! " + playerSelection + " le gana a " + playerSelection;
                break;
            case "Piedra":
                return "Tu pierdes! " + computerSelection + " le gana a " + playerSelection;
                break; 
        }
    }
    }


function game() {
    let i = 0;
    do {
        let playerSelection = prompt("Escribe tu jugada!: ");
        console.log(playRound(playerSelection, computerPlay()));
        i++;
    } while (i <= 5);
}