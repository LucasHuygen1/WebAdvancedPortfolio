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
    
    //to do lijst renderen
    toDoLijstTonen();

    // functie valideren
    function frmValideren() {
        // Checken of de input leeg is
        if (iptOpdracht.value.trim() === '') {
            window.alert('Je moet iets invullen');
            return false;
        } else {
            //for loop opdracht in localstorage zetten
            for (let index = 0; index < 1; index++) {
                lijstOpdrachten.push(iptOpdracht.value.trim());
            }
            window.alert('Opdracht is toegevoegd: ' + iptOpdracht.value);

            // Value in localStorage zetten
            localStorage.setItem("To-Do", JSON.stringify(lijstOpdrachten));

            
            iptOpdracht.value = '';

             //to do lijst renderen
            toDoLijstTonen();

            return false;

        }
    }
})();


function toDoLijstTonen() {
     //HTML
     for (let index = 0; index < localStorage.length; index++) {
        ToDoLijst.innerHTML = ''; 
        //arrow functie gebruiken
        lijstOpdrachten.forEach((opdracht, index) => {
            ToDoLijst.innerHTML += 
            `<div class="ToDoBox">
                <p>${opdracht}</p>
                <button class="verwijderen" data-index="${index}">Verwijder</button>
            </div>`;
        });
    }
    
}
