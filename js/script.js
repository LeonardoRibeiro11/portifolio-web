const btnTema = document.getElementById("btn-tema");
const btnTopo = document.getElementById("btn-topo");


// Tema salvo
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "claro") {

    document.body.classList.add("light-theme");

    btnTema.textContent = "Modo Escuro";

} else {

    btnTema.textContent = "Modo Claro";

}


// Troca de tema
function trocarTema() {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {

        btnTema.textContent = "Modo Escuro";

        localStorage.setItem("tema", "claro");

    } else {

        btnTema.textContent = "Modo Claro";

        localStorage.setItem("tema", "escuro");

    }

}


// Voltar ao topo
function voltarAoTopo() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// Mostrar botão ao rolar a página
window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        btnTopo.style.display = "block";

    } else {

        btnTopo.style.display = "none";

    }

});


// Eventos
btnTema.addEventListener("click", trocarTema);

btnTopo.addEventListener("click", voltarAoTopo);