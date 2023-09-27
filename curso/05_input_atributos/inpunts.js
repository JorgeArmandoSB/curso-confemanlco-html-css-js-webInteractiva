//.value sirve para capturar el valor de la variable capturada 
// el valor que contiene directamente la etiqueta
//valueAsNumbre convierte el valor capturado en numero



    


function verRadioSeleccionado (){
    
    let opcionesRadio = document.querySelectorAll(`[name="radio"]`);
    console.log(opcionesRadio); 
    let valor;
    for(let i = 0; i < opcionesRadio.length; i++){
        if(opcionesRadio[i].checked){
            valor = opcionesRadio[i].value;
        }
    }   
    console.log(valor);
}

verRadioSeleccionado();