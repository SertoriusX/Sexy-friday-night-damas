//Btn to start game with input to get name//
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
//------------------------------------------------------------------------------//

// btn optional change background of the game//
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
//------------------------------------------------------------------------------//

//Function of the game //

let board = [];
let selected = null;
let current = "⚪";
let playerScore = 0;
let cpuScore = 0;

const boardList = [0, 1, 2, 3, 4, 5, 6, 7];
const boardEl = document.getElementById("board");
const playerScoreEl = document.getElementById("playerScore");
const cpuScoreEl = document.getElementById("cpuScore");

const createBoard = () => {
  board = boardList.map((r) =>
    boardList.map((c) => {
      const isBlack = (r + c) % 2 === 1;
      const piece = isBlack && r < 3 ? "⚫" : isBlack && r > 4 ? "⚪" : null;
      return { r, c, color: isBlack ? "black" : "white", piece };
    })
  );
  draw();
};

const get = (r, c) => board[r]?.[c];

const draw = () => {
  boardEl.innerHTML = "";
  board.forEach((row) =>
    row.forEach((cell) => {
      const div = document.createElement("div");
      div.className = `cell ${cell.color}${
        selected && selected.r === cell.r && selected.c === cell.c
          ? " selected"
          : ""
      }`;
      div.textContent = cell.piece || "";
      div.onclick = () => onClick(cell);
      boardEl.appendChild(div);
    })
  );
  playerScoreEl.textContent = playerScore;
  cpuScoreEl.textContent = cpuScore;
};

const onClick = (cell) => {
  if (current !== "⚪") return;

  if (cell.piece === "⚪") {
    selected = cell;
    draw();
    return;
  }

  if (selected && !cell.piece && cell.color === "black") {
    const dr = selected.r - cell.r;
    const dc = selected.c - cell.c;

    if (dr === 1 && Math.abs(dc) === 1) {
      movePiece(selected, cell);
      nextTurn();
      return;
    }

    if (dr === 2 && Math.abs(dc) === 2) {
      const mid = get((selected.r + cell.r) / 2, (selected.c + cell.c) / 2);
      if (mid?.piece === "⚫") {
        mid.piece = null;
        movePiece(selected, cell);
        playerScore++;
        nextTurn();
        return;
      }
    }
  }

  draw();
};

const movePiece = (from, to) => {
  to.piece = from.piece;
  from.piece = null;
  selected = null;
};

const cpuMove = () => {
  const blackPieces = board.flat().filter((c) => c.piece === "⚫");

  const allMoves = blackPieces
    .map((c) => {
      const directions = [-1, 1];
      return directions
        .map((dc) => {
          const target = get(c.r + 1, c.c + dc);
          const jump = get(c.r + 2, c.c + 2 * dc);
          const mid = get(c.r + 1, c.c + dc);

          if (
            jump &&
            mid?.piece === "⚪" &&
            !jump.piece &&
            jump.color === "black"
          ) {
            return { from: c, to: jump, capture: mid };
          } else if (target && !target.piece && target.color === "black") {
            return { from: c, to: target };
          }
          return null;
        })
        .filter(Boolean);
    })
    .flat();

  if (!allMoves.length) return;

  const move = allMoves[Math.floor(Math.random() * allMoves.length)];
  if (move.capture) {
    move.capture.piece = null;
    cpuScore++;
  }
  movePiece(move.from, move.to);
  current = "⚪";
  draw();
};

const nextTurn = () => {
  current = current === "⚪" ? "⚫" : "⚪";
  draw();
  if (current === "⚫") setTimeout(cpuMove, 500);
};

const resetGame = () => {
  playerScore = 0;
  cpuScore = 0;
  current = "⚪";
  selected = null;
  createBoard();
};

createBoard();

//------------------------------------------------------------------------------//
