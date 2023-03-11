////////////////////////////////////////////////////////////////////////////////////////////////////
// For modal show up and close[pending,
//its is getting closed(modal) by window, not by close]

let btnRules = document.getElementsByClassName("rules")[0];
let modal = document.getElementById("modal");
let cross = document.getElementsByClassName("cross")[0];
let close = document.getElementsByClassName("cross-img")[0];

btnRules.addEventListener("click", () => {
  modal.style.display = "block";
  cross.style.display = "block";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    cross.style.display = "none";
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////

function who_wins(user,computer){
  if (user === "paper" && computer === "stone") return 1;
  else if (user === "paper" && computer === "paper") return 0;
  else if (user === "stone" && computer === "scissor") return 1;
  else if (user === "stone" && computer === "stone") return 0;
  else if (user === "scissor" && computer === "paper") return 1;
  else if (user === "scissor" && computer === "scissor") return 0;
  else return -1;
}

let lower_half = document.getElementById("lower-half");

let stone = document.getElementsByClassName("stone")[0];
let scissor = document.getElementsByClassName("scissor")[0];
let paper = document.getElementsByClassName("paper")[0];
let lines = document.getElementsByClassName("lines")[0];

stone.addEventListener("click",()=>{
  let cs_selection = Math.floor(1 + Math.random() * 3);
  let image; let x; let y; let user_color; let cs_color;
  let cs_score = document.getElementsByClassName("cs-score")[0];
  let y_score = document.getElementsByClassName("y-score")[0];
  if (cs_selection === 1){
    image = 'paper';
    x = 25; y = 25;
  }
  else if (cs_selection === 2){
    image = 'scissor';
    x = 85; y = 45;
  }
  else{
    image = 'stone';
    x = 20; y = 35;
  }
  let wins = who_wins('stone',image);
  console.log(wins);

  if (wins === 1){
    user_color = 'BD00FF';
    cs_color = 'FFA943';
    y_score.innerHTML = `&nbsp;&nbsp;${Number(y_score.innerText) + 1}`;
  }
  else if (wins === -1){
    user_color = 'FFA943';
    cs_color = 'BD00FF';
    cs_score.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;${Number(cs_score.innerText) + 1}`;
  }
  else {
    user_color = '0074B6';
    cs_color = user_color;
  }

  scissor.style.display = "none";
  paper.style.display = "none";
  lines.style.display = "none";

  let stone_icon = document.getElementsByClassName("stone-icon")[0];
  stone.style.cssText = `
  position: absolute;
  transform: translate(-180%, 190%);
  border: 16px solid #${user_color};
  `;

  let computer_answer = document.createElement("div");
  computer_answer.classList.add("computer-answer");
  computer_answer.innerHTML = `<img src="../assets/${image}.png" alt="" class="cs-scissor-icon">`;
  computer_answer.style.cssText = `
    cursor: pointer;
    width: 110px;
    height: 110px;
    background-color: #ffffff;
    filter: drop-shadow(-1px 1px 11px rgba(0, 0, 0, 0.35));
    border-radius: 50%;
    border: 16px solid #${cs_color};
    transform: translate(220%, 190%);
  `;
  document.getElementsByClassName("gestures-icons")[0].appendChild(computer_answer);
  document.getElementsByClassName("cs-scissor-icon")[0].style.cssText = `
    position: absolute;
    transform: translate(${x}%, ${y}%);
  `;


})

scissor.addEventListener("click",()=>{
  let cs_selection = Math.floor(1 + Math.random() * 3);
  let image; let x; let y; let user_color; let cs_color;
  if (cs_selection === 1){
    image = 'paper';
    x = 25; y = 25;
  }
  else if (cs_selection === 2){
    image = 'scissor';
    x = 85; y = 45;
  }
  else{
    image = 'stone';
    x = 20; y = 35;
  }
  let wins = who_wins('scissor',image);
  console.log(wins);

  if (wins === 1){
    user_color = 'BD00FF';
    cs_color = 'FFA943'
  }
  else if (wins === -1){
    user_color = 'FFA943';
    cs_color = 'BD00FF';
  }
  else {
    user_color = '0074B6';
    cs_color = user_color;
  }
  stone.style.display = "none";
  paper.style.display = "none";
  lines.style.display = "none";
  let scissor_icon = document.getElementsByClassName("scissor-icon")[0];
  scissor.style.cssText = `
  position: absolute;
  transform: translate(-180%, 190%);
  border: 16px solid #${user_color};
  `;

  var computer_answer = document.createElement("div");
  computer_answer.classList.add("computer-answer");
  computer_answer.innerHTML = `<img src="../assets/${image}.png" alt="" class="cs-scissor-icon">`;
  computer_answer.style.cssText = `
    cursor: pointer;
    width: 110px;
    height: 110px;
    background-color: #ffffff;
    filter: drop-shadow(-1px 1px 11px rgba(0, 0, 0, 0.35));
    border-radius: 50%;
    border: 16px solid #${cs_color};
    transform: translate(220%, 190%);
  `;
  document.getElementsByClassName("gestures-icons")[0].appendChild(computer_answer);
  document.getElementsByClassName("cs-scissor-icon")[0].style.cssText = `
    position: absolute;
    transform: translate(${x}%, ${y}%);
  `;

})

paper.addEventListener("click",()=>{
  let cs_selection = Math.floor(1 + Math.random() * 3);
  let image; let x; let y; let user_color; let cs_color;
  if (cs_selection === 1){
    image = 'paper';
    x = 25; y = 25;
  }
  else if (cs_selection === 2){
    image = 'scissor';
    x = 85; y = 45;
  }
  else{
    image = 'stone';
    x = 20; y = 35;
  }
  //who wins
  let wins = who_wins('paper',image);
  console.log(wins);

  if (wins === 1){
    user_color = 'BD00FF';
    cs_color = 'FFA943'
  }
  else if (wins === -1){
    user_color = 'FFA943';
    cs_color = 'BD00FF';
  }
  else {
    user_color = '0074B6';
    cs_color = user_color;
  }

  scissor.style.display = "none";
  stone.style.display = "none";
  lines.style.display = "none";
  let paper_icon = document.getElementsByClassName("paper-icon")[0];
  paper.style.cssText = `
  position: absolute;
  transform: translate(-300%, 160%);
  border: 16px solid #${user_color};
  `;

  var computer_answer = document.createElement("div");
  computer_answer.classList.add("computer-answer");
  computer_answer.innerHTML = `<img src="../assets/${image}.png" alt="" class="cs-scissor-icon">`;
  computer_answer.style.cssText = `
    cursor: pointer;
    width: 110px;
    height: 110px;
    background-color: #ffffff;
    filter: drop-shadow(-1px 1px 11px rgba(0, 0, 0, 0.35));
    border-radius: 50%;
    border: 16px solid #${cs_color};
    transform: translate(220%, 190%);
  `;
  document.getElementsByClassName("gestures-icons")[0].appendChild(computer_answer);
  document.getElementsByClassName("cs-scissor-icon")[0].style.cssText = `
    position: absolute;
    transform: translate(${x}%, ${y}%);
  `;
})

