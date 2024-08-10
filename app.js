let userScore = 0;
let compScore = 0;
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const drawGame=()=>{
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "#081b31"
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        msg.innerText = `You win! ${userChoice} beats ${compChoice};`
        msg.style.backgroundColor = "green";
        userScorePara.innerText = userScore;
    }else{
        compScore++;
        msg.innerText = `You lost. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScorePara.innerText = compScore;
    }
}

const playGame=(userChoice)=>{
    const compChoice = getCompChoice();
    if(userChoice == compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice == "rock"){
            // paper,scissors
            userWin = compChoice =="paper"?false:true;
        }
        else if(userChoice =="paper"){
            // rock,scissors
            userWin = compChoice =="rock"?true:false;
        }
        else if(userChoice =="scissors"){
            //rock,paper
            userWin = compChoice =="rock"?false:true;
        }
    showWinner(userWin,userChoice,compChoice);
    }
}

const getCompChoice=()=>{
    let options = ["rock","paper","scissors"];
    let randIndx = Math.floor(Math.random()*3);
    return options[randIndx];
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})