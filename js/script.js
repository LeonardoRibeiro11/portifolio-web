const btnTema = document.getElementById("btn-tema");
const btnTopo = document.getElementById("btn-topo");

const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "claro") {

    document.body.classList.add("light-theme");

    btnTema.textContent = "Modo Escuro";

} else {

    btnTema.textContent = "Modo Claro";

}

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

function voltarAoTopo() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        btnTopo.style.display = "block";

    } else {

        btnTopo.style.display = "none";

    }

});

btnTema.addEventListener("click", trocarTema);

btnTopo.addEventListener("click", voltarAoTopo);