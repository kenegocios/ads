// Receba o modal
var modal = document.getElementById("myModal");

// Receba o modal no carregamento do documento
var myBody = document.getElementById("myBody");

// Receba os elementos de fecham o modal
var spanClose = document.getElementsByClassName("close")[0];
var spanNext = document.getElementsByClassName("next")[0];

// Carrega as funções de inicialização do documento
myBody.onload = setTimeout(function() {
    myFunction();
}, tIniciar);

// When the user clicks on <span> (x), close the modal
spanClose.onclick = function() {
    this.href = linkModalClose; // Redireciona para link
    modal.style.display = "none"; // Fecha o modal
    // Use para alguma ação depois de um tempo
    //myVarAff = setTimeout(function() {
    //    myAff(linkAffOff);
    //}, tmodalClose);    

}

spanNext.onclick = function() {
    this.href = linkModalNext; // Redireciona para link
    modal.style.display = "none"; // Fecha o modal
}

//<a id="demo" target='_blank'></a>
function myAff(url) {
    location.href = url;
    //window.open(url);

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        myVarAff = setTimeout(function() {
            myAff(linkModalWindow);
        }, tmodalWindow); //tmodalWindow
    }
}

var myVarAff;
var myVar2;
var myvar3;

function myFunction() {
    document.getElementById("myBody").style.display = "block"; // Exiba 'myBody'    
    myVar = setTimeout(showPage, tLoader); // Interrompa a exibição do Carregador
}

function showPage() {
    document.getElementById("loader").style.display = "none"; //Oculte o Loader (carregador)
    document.getElementById("myDiv").style.display = "block"; // Exiba myDiv 
    myVar2 = setTimeout(function() { // Exiba 'myModal' em um tempo determinada
        modal.style.display = "block";
    }, tModal);
    // Redirecione se o usuário não agir no modal por
    // um tempo determinado em 'tmodalInativo'
    setTimeout(function() {
        if (modal.style.display == "block") {
            myAff(linkModalInativo);
        }
    }, tmodalInativo);


}
