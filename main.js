
function mostrar_ocultar(id){

    let div = document.getElementById(id)

    if (div.style.display == "none") {
        div.style.display = "flex"
    } else {
        div.style.display = "none"
    }
}
CSSCounterStyleRule.log("hola mundo");