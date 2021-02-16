let arr = []

function play(clickedPlayer) {
    const playerTurn = document.getElementById('player')
    const clickedBox = document.getElementById(clickedPlayer)
    if (playerTurn.innerText === "X") {
        playerTurn.innerText = 'O'
        clickedBox.innerText = "X"
        arr[clickedPlayer] = "X"
    } else {
        playerTurn.innerText = 'X'
        clickedBox.innerText = "O"
        arr[clickedPlayer] = "O"
    }
    console.log(arr);

    let topLeft = arr[0];
    let topMid = arr[1];
    let topRight = arr[2];
    let midLeft = arr[3];
    let midMid = arr[4];
    let midRight = arr[5];
    let bottomLeft = arr[6];
    let bottomMid = arr[7];
    let bottomRight = arr[8];

    if (topLeft !== undefined && topLeft === topMid && topLeft === topRight) {
        alert(`${topLeft} wins`)
    } else if (midLeft !== undefined && midLeft === midMid && midLeft === midRight){
        alert( `${midLeft} wins`)
    } else if (bottomLeft !== undefined && bottomLeft === bottomMid && bottomLeft === bottomRight){
        alert( `${bottomLeft} wins`)
    } else if (topLeft !== undefined && topLeft === midLeft && topLeft === bottomLeft){
        alert( `${topLeft} wins`)
    } else if (topMid !== undefined && topMid === midMid && topMid === bottomMid){
        alert( `${topMid} wins`)
    } else if (topRight !== undefined && topRight === midRight && topRight === bottomRight){
        alert( `${topRight} wins`)
    } else if (topLeft !== undefined && topLeft === midMid && topLeft === bottomRight){
        alert( `${topLeft} wins`)
    } else if (bottomLeft !== undefined && bottomLeft === midMid && bottomLeft === topRight){
        alert( `${bottomLeft} wins`)
    }

let fullBoard = true;
for (let i = 0; i <= 8; i++) {
  if (arr[i] === undefined) {
    fullBoard = false;
  }
}
if (fullBoard === true) {
  alert("GG");
}
}

