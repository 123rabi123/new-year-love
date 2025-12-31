function showLove() {
  const messages = [
    "Tum meri life ka sabse cute bug ho 😘",
    "New Year ho ya purana, dil tumhara hi hai ❤️",
    "Warning ⚠️: Tumse pyaar badhta ja raha hai 😍",
    "Tum smile karti ho to website bhi blush kar leti hai 😄",
    "I love you more than biryani 🍗❤️"
  ];

  const msg = document.getElementById("loveMsg");
  const random = Math.floor(Math.random() * messages.length);

  msg.innerText = messages[random];
  msg.style.display = "block";
}
