const crearInsertar = document.querySelector("#crear-insertar");
crearInsertar.addEventListener("click", () =>{
    let elementocreado = document.createElement(`h1`);
    elementocreado.textContent = "Fui creado e insertado";
    document.body.appendChild(elementocreado);
});

// crear comentarios 

let comentarioCreado = document.createComment("Hola, soy el comentarios creado");

// sirver para crear un texto, donde no tiene etiqueta.
let textCreado = document.createTextNode("creado sin etiqueta ");

