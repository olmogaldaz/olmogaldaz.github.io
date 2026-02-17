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
    
    const ingles = window.location.pathname.startsWith("/en/");

    if (response.ok) {
      if (ingles) {
        alert("Message sent successfully.");
      } else {
        alert("Mensaje enviado correctamente.");
      }
      form.reset();
    } else {
      if (ingles) {
        alert("Error sending message. Please try again later.");
      } else {
        alert("Error al enviar. Inténtalo más tarde.");
      }
    }
    
  });
}

const formEditorial = document.getElementById("form-editorial");

if (formEditorial) {
  formEditorial.addEventListener("submit", async function(event) {
    event.preventDefault();

    const data = new FormData(formEditorial);

    // const response = await fetch("https://formspree.io/f/xvzbalgd", {
    //   method: "POST",
    //   body: data,
    //   headers: { "Accept": "application/json" }
    // });
    
    const response = { ok: false }; // prueba simulada
    
    const ingles = window.location.pathname.startsWith("/en/");

    if (response.ok) {
      if (ingles) {
        alert("Message sent successfully.");
      } else {
        alert("Mensaje enviado correctamente.");
      }
      form.reset();
    } else {
      if (ingles) {
        alert("Error sending message. Please try again later.");
      } else {
        alert("Error al enviar. Inténtalo más tarde.");
      }
    }

  });
}
