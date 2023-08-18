
    const menuList = document.getElementById("menu-list");
    menuList.style.maxHeight = "0px";
    
    function showMenu() {
        if (menuList.style.maxHeight === "0px") {
            menuList.style.maxHeight = "120px";
        } else {
            menuList.style.maxHeight = "0px";
        }
    }

    AOS.init();

    function myFunction() {
        var div = document.getElementById("sobre-mim");
        if (div.style.fontSize === "50px") {
            div.style.fontSize = "30px";
        } else {
            div.style.fontSize = "50px";
        }
    }
    function color() {
    var elementsToToggle = document.querySelectorAll(".portfolio, .color, .superior, .nome, .icon, .caixa-principal, " +
    ".sobre-mim p, .sobre-mim h2, .estatico, .dinamico li span, " +
    ".sobre-mim, .foto, #menu-icon, .menu, .link-menu, " +
    ".cards-projetos, .cargo, .projetos, .projetos h2, " +
    ".card, .card p, .car h5, .rodape, .rodape h5, " +
    ".rodape p, #color-light, #color-black, .acordion-text, " +
    "#acordion-text, .cartao1, .proj1, .cartao2, .proj2, " +
    ".cartao2, .proj2, .proj3, .cartao3, .proj4, .cartao4, " +
    ".proj5, .cartao5");

    elementsToToggle.forEach(function(elem) {
        elem.classList.toggle("dark-mode");
    });
}

function expandir() {
    var sicon = document.getElementById("box");
    var acordion = document.getElementById("acordion-text");
    acordion.classList.toggle("visible");
    sicon.classList.toggle("invisible");
}

function exibir1() {
    var txt1 = document.getElementById("cardtxt1");
    txt1.classList.toggle("visible"); 
}

function exibir2() {
    var txt2 = document.getElementById("cardtxt2");
    txt2.classList.toggle("visible");
}

function exibir3() {
    var txt3 = document.getElementById("cardtxt3");
    txt3.classList.toggle("visible");
}

function exibir4() {
    var txt4 = document.getElementById("cardtxt4");
    txt4.classList.toggle("visible");
}

function exibir5() {
    var txt5 = document.getElementById("cardtxt5");
    txt5.classList.toggle("visible");
}

function exibir6() {
    var txt6 = document.getElementById("cardtxt6");
    txt6.classList.toggle("visible");
}

const toggle = document.querySelector (".toggle");
    const stack = document.querySelector (".stack");
    toggle.onclick = function(){
    stack.classList.toggle (`active`);
    }

    function html5() {
        var descr = document.getElementById("desc");
    descr.innerText =`Html5`;
}

function React() {
        var descr = document.getElementById("desc");
    descr.innerText =`React`;
}

function Css3() {
        var descr = document.getElementById("desc");
    descr.innerText =`Css3`;
}

function Python() {
        var descr = document.getElementById("desc");
    descr.innerText =`Python`;
}

function Solidity() {
        var descr = document.getElementById("desc");
    descr.innerText =`Solidity`;
}

function JS() {
        var descr = document.getElementById("desc");
    descr.innerText =`JS`;
}

function Git_Hub() {
        var descr = document.getElementById("desc");
    descr.innerText =`Git-Hub`;
}
function Angular() {
        var descr = document.getElementById("desc");
    descr.innerText =`Angular`;
}

function resetDesc() {
    var descr = document.getElementById("desc");
    descr.innerText = "</>Skill's";
}