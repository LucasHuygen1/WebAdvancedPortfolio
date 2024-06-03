//self executing function
(function() {
//element selecteren
//button selecteren
const btnToevoegen = document.getElementById('btnToevoegen');
const iptOpdracht = document.querySelector('#iptOpdracht');
const ToDoLijst = document.getElementById('ToDoLijst');

// Event listener voor de toevoeg knop
btnToevoegen.addEventListener('click', function(event) {
    event.preventDefault();
    frmValideren();
});

ToDoLijst.innerHTML = 
         `<div class="ToDoBox">
         <p>${localStorage.getItem("To-Do")}</p>
         <p>${localStorage.key("To-Do")}</p>
         <button class="verwijderen">Verwijder</button>
         </div>`
})();

function frmValideren() {
   
    //checken of de input leeg is
    if (iptOpdracht.value == '') {
        window.alert('Je moet iets invullen' + iptOpdracht.value);
        return false;
    }
    else {
        window.alert('Opdracht is toegevoegd!' + iptOpdracht.value)

         //value in localstorage zetten
         localStorage.setItem("To-Do", iptOpdracht.value);

         //div aanmaken en todo boodschap erin zetten samen met verwijderen knop
         ToDoLijst.innerHTML = 
         `<div class="ToDoBox">
         <p>${localStorage.getItem("To-Do")}</p>
         <p>${localStorage.key("To-Do")}</p>
         <button class="verwijderen">Verwijder</button>
         </div>`
         //document.getElementById("ToDoLijst").innerHTML = localStorage.getItem("To-Do");

        
        return false;
    }
}