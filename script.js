(function () {
  // Element selecteren
  const btnToevoegen = document.getElementById("btnToevoegen");
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

  function frmValideren() {
    // Checken of de input leeg is
    if (iptOpdracht.value.trim() === "" || iptOpdracht2.value.trim() === "") {
      window.alert("Je moet iets invullen");
      return false;
    } else {
      // Adding the input value to the array using a loop
      for (let index = 0; index < 1; index++) {
        lijstOpdrachten1.push(iptOpdracht.value.trim());
        lijstOpdrachten2.push(iptOpdracht2.value.trim());
      }

      // Value in localStorage zetten
      localStorage.setItem("Nummer1", JSON.stringify(lijstOpdrachten1));
      localStorage.setItem("Nummer2", JSON.stringify(lijstOpdrachten2));

      iptOpdracht.value = "";
      iptOpdracht2.value = "";

      //to do lijst renderen
      toDoLijstTonen();

      return false;
    }
  }
})();

function toDoLijstTonen() {
  //HTML
  let lijstOpdrachten1 = JSON.parse(localStorage.getItem("Nummer1")) || [];
  let lijstOpdrachten2 = JSON.parse(localStorage.getItem("Nummer2")) || [];

  //spread and rest operator
  let toegevoegdeArrays = [...lijstOpdrachten1, ...lijstOpdrachten2];
  console.log(toegevoegdeArrays);

  ToDoLijst.innerHTML = "";
  let tweedeNummerIndex = toegevoegdeArrays.length / 2;
  for (let index = 0; index < lijstOpdrachten1.length; index++) {
    ToDoLijst.innerHTML += `<div class="ToDoBox">
                <p>${toegevoegdeArrays[index]} and ${toegevoegdeArrays[tweedeNummerIndex]}</p>
                <button class="verwijderen" data-index="${index}">Verwijder</button>
            </div>`;
    tweedeNummerIndex += 1;
    console.log("index: " + index);
  }

  //event listener wanneer er op verwijderen wordt geklikt, index wordt meegegeven
  document.querySelectorAll(".verwijderen").forEach((button) => {
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
