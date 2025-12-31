function showLove() {
  for (let i = 0; i < 8; i++) {
  createFirework();
  }
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
