//element selecteren
//button selecteren
const selectButtonVeranderText = document.getElementById('veranderText');
//tekst selecteren
const SelectText = document.getElementById('textContent')

//element manipuleren door de text te veranderen wanneer op knop gedrukt met een event listener

//event listener op knop
document.getElementById('veranderText').addEventListener("click", veranderText);

//functie verander text/ element manipuleren
function veranderText() {
    SelectText.textContent = "Tekst werd net verandert!";
}
