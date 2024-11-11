let userScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#result");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#Comp-score");


const isDraw = () => {
    console.log("Game was Draw");
    msg.innerText = "Game was draw, play again";
    msg.style.backgroundColor = "blue";
};

const showWinner= (userWin, user_choice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Won, ${user_choice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        CompScore++;
        compScorePara.innerText = CompScore;
        msg.innerText = `You Lost, ${compChoice} beats ${user_choice}`;
        msg.style.backgroundColor = "red";
    }
}

const play_game = (user_choice) => {
    const compChoice = genCompChoice();

    if(user_choice === compChoice) {
        isDraw();
    }else {
        let userWin = true;
        if(user_choice === "rock") {
            userWin = compChoice === "paper"? false:true;
        }else if(user_choice === "paper") {
            userWin = compChoice === "rock"?true:false;
        }else if(user_choice === "scissor") {
            userWin = compChoice === "rock"?false:true;
        }
        showWinner(userWin, user_choice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let user_choice = choice.getAttribute("id");
        play_game(user_choice);
    });
});

const genCompChoice = () => {
    const compKiChoice = ["rock","paper","scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return compKiChoice[randomIdx];
}