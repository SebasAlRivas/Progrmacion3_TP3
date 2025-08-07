function cambiarTitulo() {
    let titulo = document.getElementById("titulo");
    titulo.textContent = "Hola Mundo con Javascript";
}

function cambiarEstilo() {
    let titulo = document.getElementById("titulo");
    titulo.style.color = "red";
    titulo.style.textAlign = "center";
}


function creaDiv() {
    let nuevoDiv = document.createElement("div");
    nuevoDiv.textContent = "Javascript permite crear páginas dinámicas";
    nuevoDiv.style.color = "white";
    nuevoDiv.style.backgroundColor = "red";
    nuevoDiv.style.textAlign = "center";
    document.body.appendChild(nuevoDiv);
}