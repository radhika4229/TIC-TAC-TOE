alert("Are you ready to play");

let user1 = prompt("Enter the first player name");
let user2 = prompt("Enter the second player name");
let quote = document.getElementById("quote");
let heading1 = document.getElementById("heading1");
let heading2 = document.getElementById("heading2");
let battle = document.getElementById("battle");
let message=document.getElementById("message");
quote.textContent =
  "🎮 Tic Tac Toe: The Epic Battle of X vs. O – May the Best Scribble Win! 😂";
quote.style.color = "white";
heading1.textContent = `Player1:${user1}`;
heading1.style.color = "white";
heading1.style.fontSize = "2rem";
heading2.style.fontSize = "2rem";
heading2.textContent = `Player2:${user2}`;
heading2.style.color = "white";
battle.textContent = `"Battle Time! ${user1}(X) vs. ${user2} (O) – May the Best Player Win!"`;
battle.style.backgroundColor = "#c98986";





let boxes = document.querySelectorAll(".cell");
let resetbtn = document.getElementById("resetbtn");

// alternate turn
let turnX = true;
let count=0;
const winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (!cell.classList.contains("disabled")) {
    if (turnX) {
      cell.innerText = "X";
      turnX = false;
    } else {
      cell.innerText = "O";
      turnX= true;
    }
    cell.classList.add("disabled");
    count++;

  checkwinner();
  if(count===9&&!checkwinner()){
    gameDraw();
  }
}
  });
});

const gameDraw = () => {
  message.innerText = `Game was a Draw.`;
  
  disableBoxes();
};

const checkwinner = () => {
  for (let pattern of winpatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val == pos2val && pos2val == pos3val) {
        showWinner(pos1val);
        
        return true;
       
      }
    }
  }
};


const resetGame = () => {
  turnX = true;
  count = 0;
  enableBoxes();
  message.textContent = "";
};
const showWinner=(winner)=>{
message.textContent=` AND THE WINNER IS 🎉🎊${winner}`;

disableBoxes();
};

const disableBoxes = () => {
  boxes.forEach((cell) => {
      cell.classList.add("disabled");
  });
};

const enableBoxes = () => {
  boxes.forEach((cell) => {
      cell.classList.remove("disabled");
      cell.innerText = ""; // Reset text content
  });
};


resetbtn.addEventListener("click", resetGame);