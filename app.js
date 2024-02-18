let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#btn");
let msgContainer=document.querySelector(".msg-container");
let newButton=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");


let turn0 = true;
const wins = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

let showWinner=(winner) =>{
    msg.innerText=`congrats winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBox();
}

const checkWinner = () => {
  for (let pattern of wins) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
      }
    }
  }
};

const disabledBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}

const resetGame=()=>{
    turn0=true;
    enableBox();
    msgContainer.classList.add("hide");
}

newButton.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);