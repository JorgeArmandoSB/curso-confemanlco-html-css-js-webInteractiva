const padre = document.querySelector(".padre");
console.log(padre);

// let nuevoElemento = document.createElement(`h1`);
// nuevoElemento.innerText = "Me inserte con appendChild";

// document.body.appendChild(nuevoElemento);

// .removeChild elimina un elemento hijo que seleccionesmos 

//.before() añade un nuevo elemento de la etiqueta inicial que este
// seleccionada antes de ella

//.after() añade un nuevo elemento de la etiqueta seleccionada depues
// de ella. 
padre.before("me agregue antes de padre con before");
padre.after("me agregue despues de padre con after");

// .prepend() añade un nuevo elemento despues de la etiqueta inicial
// de dicho elemento

padre.prepend("me agregue con prepend al inicial la etiqueta padre");

// .append() añade un nuevo elemento antes de la etiqueta final

padre.append("me agregue al final de padre con append");

padre.insertAdjacentHTML("afterbegin", `<p>creado con inserAdjecentHTML en afterbegin</p>`);

// Metodos de eliminación
// usamos el método .remove(), lo elimina del HTML no de la memoria 
