const form = document.getElementById("form-autor");

if (form) {
  const status = form.querySelector(".form-status");

  form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xpqjdbed", {
      method: "POST",
      body: data,
      headers: { "Accept": "application/json" }
    });

    if (response.ok) {
      status.textContent = "Mensaje enviado correctamente.";
      form.reset();
    } else {
      status.textContent = "Error al enviar. Inténtalo más tarde.";
    }
  });
}

