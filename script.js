// let userScore = 0;
// let compScore = 0;

// const choices = document.querySelectorAll(".choice");
// const msg = document.querySelector("#msg");


// const userScorePara = document.querySelector("#user-score");
// const compScorePara = document.querySelector("#comp-score");

// const genCompChoice =()=>{
//     const options = ["rock","paper","scissors"];
//     const randIdx = Math.floor(Math.random() * 3);
//     return options[randIdx];
// }

// const drawGame =()=>{
//     // console.log("Game was Drawn");
//     msg.innerText = "Game was Drawn Try Again!"
//     msg.style.backgroundColor = "#081b31"
// };

// const showWinner=(userWin)=>{
//     if(userWin){
//         // console.log("You Win 🎉");
//         userScore++;
//         userScorePara.innerText = userScore;
//         msg.innerText = "You Win 🎉"
//         msg.style.backgroundColor = "green";
//     }
//     else{
//         // console.log("You loose Try Again 😢");
//         compScore++;
//         compScorePara.innerText = compScore;
//         msg.innerText = "You loose Try Again 😢"
//         msg.style.backgroundColor = "red"
        
//     }
    
// }


// const playGame = (userChoice)=>{

//     // Gererate User Choice
//     console.log("User choice = ", userChoice);
//     // Generate Copmuter Choice
//     const compChoice = genCompChoice();
//     console.log("Comp choice = ", compChoice );

//     if(userChoice === compChoice){
//         drawGame();
//     }else{
//         let userWin = true;
//         if(userChoice === "rock"){
//             // paper, scissors
//             userWin = compChoice === "paper" ? false :true;
//         }else if(userChoice === "paper"){
//             // rock, scissors
//             userWin = compChoice === "scissors" ? false : true; 
//         }else{
//             //  paper, rock
//             userWin = compChoice === "rock" ? false : true
//         }
//         showWinner(userWin)
//     }
// }



// choices.forEach((choice)=>{
//     choice.addEventListener("click",()=>{
//         const userChoice = choice.getAttribute("id")
//         playGame(userChoice);
//     }); 
// });





let userScore = 0;
let compScore = 0;

const choices =document.querySelectorAll(".choice");
let msg = document.querySelector("#msg")

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");


const genCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame =()=>{
    console.log("Game was Drawn");
    msg.innerText = "Game was Drawn"
    msg.style.backgroundColor ="#081b31";


}

const showWinner = (userWin)=>{
    if(userWin){
        // console.log("You Won 🎉");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Won 🎉"
        msg.style.backgroundColor ="green";
    }
    else{
        // console.log("You lose! Try again");
        compScore++;
        compScorePara.innerText = compScore
        msg.innerText = "You lose ! Try Again"
        msg.style.backgroundColor ="red";


    }
}



const playGame = (userChoice)=>{
    // Generate User Choice
    // console.log(userChoice);
    // Generate Comp Choice
    const compChoice = genCompChoice()
    console.log("Comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame()
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // paper, scissors
            userWin = compChoice === "paper" ? false : true
        }
        else if (userChoice === "paper"){
            // scissors, rock
            userWin = compChoice === "scissors" ? false : true
        }
        else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true
        }
        showWinner(userWin);
    }


}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        console.log("User Choice = ", userChoice);
        playGame(userChoice);
    })
})






