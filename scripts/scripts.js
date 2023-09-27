const productos = document.querySelector(".productos");
productos.addEventListener("click", () => {
    let showProduct = document.querySelector("#showProducts");

    showProduct.classList.contains("d-none") ?
    showProduct.classList.remove("d-none"):
    showProduct.classList.add("d-none");
   
})



const listEmpanadas = document.querySelectorAll(".list-group li");

listEmpanadas.forEach((li) => {
    li.addEventListener("click", () =>{

        

        let seccionVentas = document.querySelector("#seccion-ventas");
        seccionVentas.classList.remove("d-none");
        
        let empanadaSeleccionada = document.querySelector("#seleccion-1");
        empanadaSeleccionada.classList.remove("active");

        empanadaSeleccionada = document.querySelector("#seleccion-2");
        empanadaSeleccionada.classList.remove("active");

        // contadorEmpanadas = document.querySelector("#seleccion-2 #contadores-2");
        // contadorEmpanadas.className = "badge bg-white text-primary rounded-pill";

        empanadaSeleccionada = document.querySelector("#seleccion-3");
        empanadaSeleccionada.classList.remove("active");

        // contadorEmpanadas = document.querySelector("#seleccion-3 #contadores-3");
        // contadorEmpanadas.className = "badge bg-white text-primary rounded-pill";

        empanadaSeleccionada = document.querySelector("#seleccion-4");
        empanadaSeleccionada.classList.remove("active");

        // contadorEmpanadas = document.querySelector("#seleccion-4 #contadores-4");
        // contadorEmpanadas.className = "badge bg-white text-primary rounded-pill";

        empanadaSeleccionada = li;
        empanadaSeleccionada.classList.add("active");

        let empanada = empanadaSeleccionada.textContent
        showEmpanadas = document.querySelector("#showEmpanadas");
        showEmpanadas.innerHTML = empanada.replace(/[0-9]+/g, ""); 
        
    });
});


