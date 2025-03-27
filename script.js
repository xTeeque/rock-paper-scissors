//Rock = 0 - 0.32,
//Paper = 0.33 - 0.66,
//Scissors = 0.67 - 0.99

function getComputerChoice(){
    return Math.random();
}

function getHumanChoice(){
    let user = prompt("Enter your choice: {1 = Rock, 2 = Paper, 3 = Scissors}", "Here you can write");
    return user.toLowerCase();
}

function playGame(humanChoice, computerChoice){
    let humanScore = 0;
    let computerScore = 0;

    while (humanScore < 5 || computerScore < 5)
    {

        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();

        if (humanChoice === 'rock' && computerChoice < 0.33){
            console.log("You both chose Rock, try again...");
        }
   
        else if (humanChoice === 'scissors' && computerChoice > 0.66){
            console.log("You both chose Scissors, try again...");
        }

        else if (humanChoice === 'paper' && computerChoice < 0.66 && computerChoice > 0.33){
            console.log("You both chose Paper, try again...");
        }

        else if(humanChoice === 'rock' && computerChoice < 0.66 && computerChoice > 0.33){
            console.log("You lose! Paper beats Rock");
            computerScore++;
        }

        else if(humanChoice === 'rock' && computerChoice > 0.66){
            console.log("You won! Rock beats Scissors");
            humanScore++;
        }

        else if(humanChoice === 'paper' && computerChoice < 0.33){
            console.log("You won! Paper beats Rock");
            humanScore++;
        }

        else if(humanChoice === 'paper' && computerChoice > 0.66){
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        }
       
        else if(humanChoice === 'scissors' && computerChoice < 0.33){
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        }

        else if(humanChoice === 'scissors' && computerChoice < 0.66 && computerChoice > 0.33){
            console.log("You won! Scissors beats Paper");
            humanScore++;
        }

        else{
            console.log("Invalid input.")
        }
    }
    if (humanScore == 5)
        return console.log("You won! Good job");
    else
        return console.log("You lost, try again later...");
}