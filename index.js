function abc() {
  document.querySelector(".desc").textContent = "Press the play button to continue playing";
  var rand1 = Math.floor(6 * Math.random() + 1);
  if (rand1 == 1) {
    document.querySelector(".img1").setAttribute("src", "Images/Dice1.png");
  } else if (rand1 == 2) {
    document.querySelector(".img1").setAttribute("src", "Images/Dice2.png");
  } else if (rand1 == 3) {
    document.querySelector(".img1").setAttribute("src", "Images/Dice3.png");
  } else if (rand1 == 4) {
    document.querySelector(".img1").setAttribute("src", "Images/Dice4.png");
  } else if (rand1 == 5) {
    document.querySelector(".img1").setAttribute("src", "Images/Dice5.png");
  } else if (rand1 == 6) {
    document.querySelector(".img1").setAttribute("src", "Images/Dice6.png");
  }

  var rand2 = Math.floor(6 * Math.random() + 1);
  if (rand2 == 1) {
    document.querySelector(".img2").setAttribute("src", "Images/Dice1.png");
  } else if (rand2 == 2) {
    document.querySelector(".img2").setAttribute("src", "Images/Dice2.png");
  } else if (rand2 == 3) {
    document.querySelector(".img2").setAttribute("src", "Images/Dice3.png");
  } else if (rand2 == 4) {
    document.querySelector(".img2").setAttribute("src", "Images/Dice4.png");
  } else if (rand2 == 5) {
    document.querySelector(".img2").setAttribute("src", "Images/Dice5.png");
  } else if (rand2 == 6) {
    document.querySelector(".img2").setAttribute("src", "Images/Dice6.png");
  }

  if (rand1 > rand2) {
    document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerText = "🚩 Player 1 wins!";
  } else if (rand1 == rand2) {
    document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerText = "Draw!";
  } else document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerText = "Player 2 wins! 🚩";

}
