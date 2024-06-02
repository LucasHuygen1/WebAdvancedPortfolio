//element selecteren
//button selecteren
const btnToevoegen = document.getElementById('btnToevoegen');

//event listener op knop
document.getElementById('btnToevoegen').addEventListener("click", popup);

//popup om te confirmeren dat item is toegevoegd
function popup() {
    window.alert('Item is toegevoegd!');
}
