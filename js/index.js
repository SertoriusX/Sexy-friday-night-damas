const startBtn = document.getElementById("startGameBtn");
const playContainer = document.getElementById("Play");
const introContainer = document.querySelector(".intro-container");

startBtn.addEventListener("click", () => {
  const playerName = document.getElementById("playerName").value.trim();
  const sendName = document.querySelector("#sendName");

  if (!playerName) {
    alert("Please enter your name!");
    return;
  }

  introContainer.classList.add("fade-out");

  setTimeout(() => {
    sendName.innerHTML = `Hello dear do you what play with my dama ${playerName}?`;
    introContainer.style.display = "none";
    playContainer.classList.remove("d-none");
  }, 600);
});
const displayContainer = (optional) => {
  const backGroundColor = document.querySelector("#colorBox");

  switch (optional) {
    case "first_image":
      backGroundColor.style.backgroundImage ="url('./imagenes/first_image.png')";
      backGroundColor.style.backgroundSize = "cover";
      backGroundColor.style.backgroundAttachment = "fixed";
      backGroundColor.style.minHeight = "100vh";
      backGroundColor.style.backgroundPosition = "center";
      backGroundColor.style.backgroundRepeat = "no-repeat";
      backGroundColor.style.backgroundColor = "initial";
      break;
    case "second":
      backGroundColor.style.backgroundImage ="url('./imagenes/thumb-1920-849419.jpg')";
      backGroundColor.style.backgroundSize = "cover";
      backGroundColor.style.backgroundPosition = "center";
      backGroundColor.style.backgroundRepeat = "no-repeat";
      backGroundColor.style.backgroundColor = "initial";
      break;

    case "third":
      backGroundColor.style.backgroundImage = "url('./imagenes/chilled.jpg')";
      backGroundColor.style.backgroundSize = "cover";
      backGroundColor.style.backgroundPosition = "center";
      backGroundColor.style.backgroundRepeat = "no-repeat";
      backGroundColor.style.backgroundAttachment = "fixed";
      backGroundColor.style.minHeight = "100vh";
      backGroundColor.style.backgroundColor = "initial";
      break;

    case "reset":
      backGroundColor.style.backgroundImage = "none";
      backGroundColor.style.backgroundColor = "initial";
      break;
  }
};

// index.js
module.exports = displayContainer;
