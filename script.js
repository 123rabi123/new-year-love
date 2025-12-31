function showLove() {
  const messages = [
    "Tum meri zindagi ka sabse khoobsurat hissa ho ❤️",
    "Tumhare bina New Year adhura lagta hai 😘",
    "Tum meri har muskurahat ki wajah ho 😊",
    "I love you more than momos 😜❤️",
    "Tum ho to har din festival jaisa lagta hai 🎉💖"
  ];

  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("loveMsg").innerText = randomMsg;
}
