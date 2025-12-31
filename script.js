function showLove() {
  for (let i = 0; i < 8; i++) {
  createFirework();
  }
  document.getElementById("quiz").style.display = "block";
  const msg = document.getElementById("loveMsg");
  msg.style.display = "block";
  msg.innerHTML = "💌 Tum meri zindagi ki sabse cute billi ho 😻🐱❤️";

  // ❤️ Hearts create
  const heartsContainer = document.querySelector(".hearts");
  heartsContainer.innerHTML = "";

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    heartsContainer.appendChild(heart);
  }
}
function createFirework() {
  const fw = document.createElement("div");
  fw.classList.add("firework");

  fw.style.left = Math.random() * 100 + "vw";
  fw.style.top = Math.random() * 50 + "vh";

  document.body.appendChild(fw);

  setTimeout(() => {
    fw.remove();
  }, 1500);
}
function yesLove() {
  document.getElementById("quizResult").innerHTML =
    "😍 Mujhe pata tha! Tum meri hi ho ❤️🐱🎆";
}

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  noBtn.style.left = Math.random() * 100 - 50 + "px";
  noBtn.style.top = Math.random() * 50 - 25 + "px";
});
