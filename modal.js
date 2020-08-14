// Get the modal
var modal = document.getElementById("myModal");

// Get the modal no carregamento
var myBody = document.getElementById("myBody");

// Get the <span> element that closes the modal
var spanClose = document.getElementsByClassName("close")[0];
var spanNext = document.getElementsByClassName("next")[0];

// Carrega as funções de inicialização do documento
myBody.onload = setTimeout(function () {
    myFunction();
}, tIniciar);

// When the user clicks on <span> (x), close the modal
spanClose.onclick = function () {
    modal.style.display = "none";
    setTimeout(function () {
        myAff(linkAffClose);
    }, tmodalClose);

}

// When the user clicks on <span> (x), close the modal
spanNext.onclick = function () {
    modal.style.display = "none";
    setTimeout(function () {
        myAff(linkAffNext);
    }, tmodalNext);

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        setTimeout(function () {
            myAff(linkAffOff);
        }, tmodalOff);
    }
}

function myAff(mylink) {
    location.href = mylink

}

var myVar;
var myVar2;

function myFunction() {
    // Exiba 'myBody'
    document.getElementById("myBody").style.display = "block";
    // Interrompa a exibição do Carregador
    myVar = setTimeout(showPage, tLoader);

}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
    myVar2 = setTimeout(function () {
        modal.style.display = "block";
    }, tModal);
    // Redirecione se o usuário não agir no modal
    setTimeout(function () {
        if (modal.style.display == "block") {
            myAff(linkModalInativo);
        }
    }, ModalInativo);

}
