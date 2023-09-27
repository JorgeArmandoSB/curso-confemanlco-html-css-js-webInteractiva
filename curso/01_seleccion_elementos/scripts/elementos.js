let getH1 = document.getElementById("soy-el-id");
getH1.innerText = "modificado con el getElementById";

let getClassH2 = document.getElementsByClassName("soy-class");
getClassH2[0].innerHTML = "modificando el primer h2";
getClassH2[1].innerHTML = "modificando el segundo h2";

let getTypeName = document.getElementsByName("name_h3");
getTypeName[0].innerText = "modificado por el name";

let getTagName = document.getElementsByTagName("p");
getTagName[1].innerText = "modificado por la etiqueta";

// metodo de selección moderna 
// los querySelector()

let queyFristH2 = document.querySelector("h2");
queyFristH2.innerText = "me cambio un querySelector 😀";
