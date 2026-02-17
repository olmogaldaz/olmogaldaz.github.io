const form = document.getElementById("form-autor");

if (form) {
  form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const data = new FormData(form);

    // const response = await fetch("https://formspree.io/f/xpqjdbed", {
    //   method: "POST",
    //   body: data,
    //   headers: { "Accept": "application/json" }
    // });
    
    const response = { ok: false };

    if (response.ok) {
      alert("Mensaje enviado correctamente.");
      form.reset();
    } else {
      alert("Error al enviar. Inténtalo más tarde.");
    }
  });
}

const formEditorial = document.getElementById("form-editorial");

if (formEditorial) {
  formEditorial.addEventListener("submit", async function(event) {
    event.preventDefault();

    const data = new FormData(formEditorial);

    const response = { ok: false }; // prueba simulada

    if (response.ok) {
      alert("Mensaje enviado correctamente.");
      formEditorial.reset();
    } else {
      alert("Error al enviar. Inténtalo más tarde.");
    }
  });
}
