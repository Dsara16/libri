const menu = document.getElementById("menu");
const btn = document.getElementById("menuBtn");

let aperto = false;

btn.addEventListener("click", () => {
    if (!aperto) {
        menu.style.left = "0px";
        btn.classList.add("attivo");
    } else {
        menu.style.left = "-220px";
        btn.classList.remove("attivo");
    }
    aperto = !aperto;
});


