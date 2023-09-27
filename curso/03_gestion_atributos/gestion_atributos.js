const boton = document.createElement(`button`);
boton.id = "el-boton";
boton.style = "color:white";
boton.className = "btn btn-primary";
boton.innerText = "Creado";
document.body.appendChild(boton);

const ejemploSelector = document.querySelector("#ejemplo-selector");
ejemploSelector.className = "btn btn-danger";

const cambiarColor = document.querySelector("#cambiar-color");
cambiarColor.addEventListener("click", () => {
   
    ejemploSelector.className === "btn btn-danger" ?
    ejemploSelector.className = "btn btn-primary btn-lg" :
    ejemploSelector.className = "btn btn-danger";  
});

        // obtener atributos
// hasAsttributes busca si hay atributos en etiquetas de html
// hasAttribute("atributo") busca un atributo expecifico
// getAttributeName obtiene en un array los atributos 
// getAttribute obtiene el valor del atributo


    // sección para modificar y elmininar atributos

// setAttribute("nombre del parametro", "valor del atributo")
// añade o cambia el valor de un atributo

//removeAttribute("nombre atributo") => elimina un atributo

// toggleAttribute("nombre del atributo")  => sirve para quitar o poner atributos
// dependiendo de si lo tiene o no lo tiene 
//