let inputId = document.getElementById('inputId');
let inputColor = document.getElementById('inputColor')

function setCard() {
    let card = document.getElementById(inputId.value);
    card.style.color = inputColor.value
    console.log(card)
}