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
    localStorage.setItem("theme", theme);
    themeToggle.textContent =
        theme === "dark" ? "☀️ Modo claro" : "🌙 Modo oscuro";
});

const contactForm = document.querySelector("#contactForm");
const submitBtn = document.querySelector("button[type='submit']");
const status = document.getElementById("status");

contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    if (!name || !email || !message) {
        status.textContent ="✖️ Completa todos los campos";
        status.style.color = "red";
    return;
    }
    status.textContent = "✅ Mensaje enviado correctamente";
    status.style.color = "green";
    const res = await fetch ("http://localhost:3000/contacto", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            message,
        }),
    });
    if (!res.ok) {
        throw new Error("Error al enviar mensaje");
    }
    alert ("mensaje enviado");
    console.log("mensaje enviado");
    submitBtn.disabled = true;
    submitBtn.textContent = "Enviando...";
    contactForm.reset();
    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = "Enviar";
    }, 2000);
    contactForm.addEventListener("input", () => {
        status.textContent = "";
    })
})

