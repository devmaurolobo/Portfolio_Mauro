function color() {
    var elementsToToggle = document.querySelectorAll(".portfolio,.box, .color, .superior, .nome, .icon, .caixa-principal, " +
    ".sobre-mim p, .sobre-mim h2, .estatico, .dinamico li span, " +
    ".sobre-mim, .foto, #menu-icon, .menu, .link-menu, " +
    ".cards-projetos, .cargo, .projetos, .projetos h2, " +
    ".card, .card p, .car h5, .rodape, .rodape h5, " +
    ".rodape p, #color-light, #color-black, .acordion-text, " +
    "#acordion-text, .cartao1, .proj1, .cartao2, .proj2, " +
    ".cartao2, .proj2, .proj3, .cartao3, .proj4, .cartao4, " +
    ".proj5, .cartao5,.black_light_btn,.black_light_btn:after,. #menu-list");

    elementsToToggle.forEach(function(elem) {
        elem.classList.toggle("dark-mode");
    });
}

const toggle = document.querySelector (".toggle");
    const stack = document.querySelector (".stack");
    toggle.onclick = function(){
    stack.classList.toggle (`active`);
    }