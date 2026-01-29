console.log("portafolio cargado correctamente👌");
const contactBtn= document.querySelector("#contactBtn");

console.log(contactBtn);

const contactSection = document.querySelector("#contactSection");

contactBtn.addEventListener("click", () =>
{
    contactSection.classList.toggle("hidden");

    if (contactSection.classList.contains("hidden")){
        contactBtn.textContent = "Contactame 👋";
    }
    else {
        contactBtn.textContent = "Cerrar ✖️";
    }
});

const themeToggle = document.querySelector("#themeToggle");

//cargar preferencia
if (localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️ Modo claro";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const theme = document.body.classList.contains("dark")
        ? "dark"
        : "light";
    localStorage.textContent =
        theme === "dark" ? "☀️ Modo claro" : "🌙 Modo oscuro";
});