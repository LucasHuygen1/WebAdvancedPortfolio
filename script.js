//self executing function #15
(function () {
  // Elementen selecteren #1
  const btnToevoegen = document.getElementById("btnToevoegen");
  //Gebruik van een constante #5
  const iptOpdracht = document.querySelector("#iptOpdracht");
  const iptOpdracht2 = document.querySelector("#iptOpdracht2");

  const ToDoLijst = document.getElementById("ToDoLijst");
  let lijstOpdrachten1 = JSON.parse(localStorage.getItem("Nummer1")) || [];
  let lijstOpdrachten2 = JSON.parse(localStorage.getItem("Nummer2")) || [];

  // Event listener voor de toevoeg knop
  btnToevoegen.addEventListener("click", function (event) {
    event.preventDefault();
    frmValideren();
  });

 
  //to do lijst renderen
  toDoLijstTonen();

// Functie die een Promise teruggeeft om te controleren of de invoer een waarde heeft.
// Gebruik van promise #12
function controlerenInputLeeg() {
  return new Promise(function checkInput(resolve, reject) {
    if (iptOpdracht.value.trim() !== "" && iptOpdracht2.value.trim() !== "") {
      resolve("Getallen werden toegevoegd");
    } else {
      reject("De invoer is leeg");
    }
  });
}

//Hier wordt form gevalideerd #4
function frmValideren() {
  controlerenInputLeeg()
    .then(function(resolve) {
      // er is een input 
        // input in array zetten
        for (let index = 0; index < 1; index++) {
          lijstOpdrachten1.push(iptOpdracht.value.trim());
          lijstOpdrachten2.push(iptOpdracht2.value.trim());
        }

        // Value in localStorage zetten
        //gebruik van localstorage #20
        localStorage.setItem("Nummer1", JSON.stringify(lijstOpdrachten1));
        localStorage.setItem("Nummer2", JSON.stringify(lijstOpdrachten2));

        iptOpdracht.value = "";
        iptOpdracht2.value = "";

        //to do lijst renderen
        toDoLijstTonen();
        
        window.alert(resolve);
        return false;
      
    })
    //gebruik van Consumer methods #13
    .catch(function(reject) {
      // input is leeg 

      // Foutmelding weergeven
      window.alert(reject);
      return false;
    });

  
}

})();



function toDoLijstTonen() {
  //HTML
  let lijstOpdrachten1 = JSON.parse(localStorage.getItem("Nummer1")) || [];
  let lijstOpdrachten2 = JSON.parse(localStorage.getItem("Nummer2")) || [];

  //spread and rest operator #8
  let toegevoegdeArrays = [...lijstOpdrachten1, ...lijstOpdrachten2];
  console.log(toegevoegdeArrays);

  ToDoLijst.innerHTML = "";
  let tweedeNummerIndex = toegevoegdeArrays.length / 2;
  //Iteration over een array #9
  for (let index = 0; index < lijstOpdrachten1.length; index++) {
    //berekeningen met getallen
    //gebruik van destructering #7
    const [vermenigvuldigen, delen, macht] = Oplossingen(
      toegevoegdeArrays[index],
      toegevoegdeArrays[tweedeNummerIndex]
    );
    //elementen manipuleren #2 && gebruik van template iterates #6
    ToDoLijst.innerHTML += `<div class="ToDoBox">
                <p>${toegevoegdeArrays[index]} en ${
      toegevoegdeArrays[tweedeNummerIndex]
    }</p>
                <p>Vermenigvuldigen: ${vermenigvuldigen.toFixed(2)}</p>
                <p>Delen: ${delen.toFixed(2)}</p>
                <p>Macht: ${macht.toFixed(2)}</p>
                <button class="verwijderen" data-index="${index}">Verwijder</button>
            </div>`;
    tweedeNummerIndex += 1;
    console.log("index: " + index);
  }

  //event listener wanneer er op verwijderen wordt geklikt, index wordt meegegeven
  //gebruik van arrow function #10 + callback function ook #11
  document.querySelectorAll(".verwijderen").forEach((button) => {
    //Event aan een element koppelen #3
    button.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      lijstOpdrachten1.splice(index, 1);
      lijstOpdrachten2.splice(index, 1);

      localStorage.setItem("Nummer1", JSON.stringify(lijstOpdrachten1));
      localStorage.setItem("Nummer2", JSON.stringify(lijstOpdrachten2));
      //pagina refreshen want als er item wordt toegevoegd komen de verwijderde er anders ook nog bij
      window.location.reload();

      toDoLijstTonen();
    });
  });
}

//destructuring
function Oplossingen(Nummer1, Nummer2) {
  const vermenigvuldigen = Nummer1 * Nummer2;
  const delen = Nummer1 / Nummer2;
  const macht = Math.pow(Nummer1, Nummer2);

  return [vermenigvuldigen, delen, macht];
}

