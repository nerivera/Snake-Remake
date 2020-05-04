var snPos = [Math.floor(Math.random() * 195) + 1],
  go = true,
  dirSum = 0,
  save = 0,
  count = 0,
  sav = 0,
  best = 0,
  tac = Math.floor(Math.random() * 195) + 1,
  atd = 0,
  time = 0;
while (![1, 2, 3].includes(time)) {
  time = Number(prompt("Choose a difficulty:\n  Easy - 1\n  Medium - 2\n  Hard - 3\n (Enter 1, 2, or 3:)"));
}
alert("Use WASD or the arrow keys to move. Press space to pause.");
time = [250, 175, 100][time - 1];

function move() {
  save = dirSum;
  sav = snPos[0];
  if (go && dirSum != 0 && atd === 0) {
    for (var i = snPos.length - 2; i > -1; i--) {
      snPos[i + 1] = snPos[i];
    }
    snPos[0] += dirSum;
  } else if (go && dirSum != 0) {
    atd--;
    for (var l = snPos.length; l > 0; l--) {
      snPos[l] = snPos[l - 1];
    }
    snPos[0] += dirSum;
  }
  if (go) {
    $("td").css("background-color", "lightgray");
    $(".out").css("background-color", "gray");
    $("#" + String(tac)).css("background-color", "green");
    for (var j = 0; j < snPos.length; j++) {
      $("#" + snPos[j]).css("background-color", "red");
    }
    $("#" + String(snPos[0])).css("background-color", "orange");
  }
  count = 0;
  if (go) {
    setTimeout(move, time);
    for (var k = 1; k < 197; k++) {
      if ($("#" + String(k)).css("background-color") === "rgb(255, 0, 0)" || $("#" + String(k)).css("background-color") === "rgb(255, 165, 0)") {
        count++;
      }
    }
    if (count < snPos.length ||
         (sav % 14 === 0 && sav > 13 && sav < 197 && snPos[0] === sav + 1) ||
         (snPos[0] % 14 === 0 && snPos[0] > 13 && snPos[0] < 197 && sav == snPos[0] + 1)
       ) {
      go = false;
      $("td").css("background-color", "lightgray");
      $(".out").css("background-color", "gray");
      if (snPos.length - 1 > best) {
        best = snPos.length - 1;
      }
      alert("You died\nScore: " + String(snPos.length - 1 + atd) + "\nBest: " + best);
      if (confirm("Would you like to play again?")) {
        snPos = [Math.floor(Math.random() * 195) + 1];
        dirSum = 0;
        go = true;
        atd = 0;
        tac = Math.floor(Math.random() * 195) + 1;
      }
    }
  }
  if (snPos[0] === tac) {
    tac = Math.floor(Math.random() * 195) + 1;
    atd += 2;
  }
}
setTimeout(move, 0);

function change(event) {
  switch (event.which) {
    case 40:
      dirSum = 14;
      break;
    case 37:
      dirSum = -1;
      break;
    case 38:
      dirSum = -14;
      break;
    case 39:
      dirSum = 1;
      break;
    case 83:
      dirSum = 14;
      break;
    case 65:
      dirSum = -1;
      break;
    case 87:
      dirSum = -14;
      break;
    case 68:
      dirSum = 1;
      break;
    case 32:
      dirSum = 0;
  }
  if (save === -1 * dirSum && snPos.length != 1) {
    dirSum = save;
  }
}
$(document).ready(function() {
  $("input").keydown(change);
  $("table").css("width", $("table").css("height"));
});
