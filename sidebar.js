// Receber Sidebar
var mySidebar = document.getElementById("mySidebar");

// Receba DIV com efeito de sobreposição
var overlayBg = document.getElementById("myOverlay");

// Alterne entre mostrar e ocultar a barra lateral e adicionar efeito de sobreposição
function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        overlayBg.style.display = "none";
    } else {
        mySidebar.style.display = 'block';
        overlayBg.style.display = "block";
    }
}

// Feche a barra lateral com o botão Fechar
function w3_close() {
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
}
