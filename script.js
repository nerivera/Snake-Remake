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
    if (count < snPos.length || (sav === 14 && snPos[0] === 15) || (sav === 28 && snPos[0] === 29) || (sav === 42 && snPos[0] === 43) || (sav === 56 && snPos[0] === 57) || (sav === 70 && snPos[0] === 71) || (sav === 98 && snPos[0] === 99) || (sav === 112 && snPos[0] === 113) || (sav === 126 && snPos[0] === 127) || (sav === 140 && snPos[0] === 141) || (sav === 154 && snPos[0] === 155) || (sav === 168 && snPos[0] === 169) || (sav === 182 && snPos[0] === 183) || (sav === 196 && snPos[0] === 197) || (sav === 15 && snPos[0] === 14) || (sav === 29 && snPos[0] === 28) || (sav === 43 && snPos[0] === 42) || (sav === 57 && snPos[0] === 56) || (sav === 71 && snPos[0] === 70) || (sav === 85 && snPos[0] === 84) || (sav === 99 && snPos[0] === 98) || (sav === 113 && snPos[0] === 112) || (sav === 127 && snPos[0] === 126) || (sav === 141 && snPos[0] === 140) || (sav === 155 && snPos[0] === 154) || (sav === 169 && snPos[0] === 168) || (sav === 183 && snPos[0] === 182) || (sav === 197 && snPos[0] === 196)) {
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
  if (save === -1 * dirSum) {
    dirSum = save;
  }
}
$(document).ready(function() {
  $("input").keydown(change);
  $("table").css("width", $("table").css("height"));
});
