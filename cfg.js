// Controle de Eventos ao Carregar o Documento
// Time(1000 = 1 segundo)
// Inicie eventos baseado no Time
var tIniciar = 0; // para iniciar de imediato use '0'
var tLoader = 2500; // Ficará ativo durante tempo definido
var tModal = 15000; // Defina um Time para exibir o Modal após segundos
var tmodalInativo = 30000; // Acionado quando inativo
var tmodalClose = 20000; // Acionado ao clicar no <x> para fechar.
var tmodalNext = 1000; // Acionado ao clicar em Avançar.
var tmodalWindow = 30000; // Acionado quando clica fora do modal, dentro da página.
//var meuLink = "Meu Link"
var linkModalClose = linkAff; // Link do botão Fechar
var linkModalNext = linkAff; // Link do botão Avançar
var linkModalWindow = linkAff; // Link para quando clica fora do modal
var linkModalInativo = linkAff; // Link para quando fica inativo por um tempo
