let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".messageContainer");
let msg = document.querySelector("#msg");
 let turnO = true;
 const WinPattern = 
 [

 [0,1,2],
 [0,3,6],
 [0,4,8],
 [1,4,7],
 [2,5,8],
 [2,4,6],
 [3,4,5],
 [6,7,8]
 ];
const resetGame = ()=>{
    turnO=true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((boxx=>{
    boxx.addEventListener("click", ()=>{
        console.log("box was clicked");
        if(turnO){
            boxx.innerText = "X";
            turnO = false;
        }
        else{
            boxx.innerText = "O";   
            turnO = true;
        }
        boxx.disabled = true;  
        CheckWinner();
    });

}));

const disabledBoxes = ()=>{
    for(let box of boxes){
   box.disabled = true; 

}}

const enabledBoxes = ()=>{
    for(let boxxx of boxes){
    boxxx.disabled = false;
    boxxx.innerText = "";
}}

const ShowWinner = (winner)=>{
  msg.innerText = `Congratulation!! The Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
}

const CheckWinner =() =>{
    for(let pattern of WinPattern){
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;
        if(pos1Value != "" && pos2Value !="" && pos3Value!= ""){
            if(pos1Value=== pos2Value && pos2Value=== pos3Value)
            {
                console.log("Winner", pos1Value);
                ShowWinner(pos1Value);
            }
        }
       // console.log(pattern[0],pattern[1], pattern[2]);
      //  console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        
    }
};
newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame); 