//self executing function
(function() {
//element selecteren
//button selecteren
const btnToevoegen = document.getElementById('btnToevoegen');

})();

function frmValideren() {
    let iptOpdracht = document.forms["frmToevoegenToDo"]["iptOpdracht"].value;
    //checken of de input leeg is
    if (iptOpdracht == '') {
        window.alert('Je moet iets invullen' + iptOpdracht);
        return false;
    }
    else {
        window.alert('Opdracht is toegevoegd!' + iptOpdracht)

         //value in localstorage zetten
         localStorage.setItem("To-Do", iptOpdracht);

         document.getElementById("test").innerHTML = localStorage.getItem("To-Do");

        return false;
    }
}