//element selecteren
//button selecteren
const btnToevoegen = document.getElementById('btnToevoegen');

function frmValideren() {
    let testValidatie = document.forms["frmToevoegenToDo"]["iptOpdracht"].value;
    //checken of de input leeg is
    if (testValidatie == '') {
        popupLeeg();
        return false;
    }
    else {
        popupToegevoegd();
        return false;
    }

}

//popup om te confirmeren dat item is toegevoegd
function popupLeeg() {
    window.alert('Je moet iets invullen');
}

function popupToegevoegd() {
    window.alert('Opdracht is toegevoegd!')
}
