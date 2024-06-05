(function() {
    // Element selecteren
    const btnToevoegen = document.getElementById('btnToevoegen');
    const iptOpdracht = document.querySelector('#iptOpdracht');
    const ToDoLijst = document.getElementById('ToDoLijst');
    let lijstOpdrachten = JSON.parse(localStorage.getItem("To-Do")) || [];

    // Event listener voor de toevoeg knop
    btnToevoegen.addEventListener('click', function(event) {
        event.preventDefault();
        frmValideren();
    });
    
    //to do lijst renderen
    toDoLijstTonen();

    // Function to validate and add the task
    function frmValideren() {
        // Checken of de input leeg is
        if (iptOpdracht.value.trim() === '') {
            window.alert('Je moet iets invullen');
            return false;
        } else {
            // Adding the input value to the array using a loop
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