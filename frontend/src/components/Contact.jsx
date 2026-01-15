import { useState, useRef } from "react";

function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const validate = (formData) => {
    const newErrors = {};

    const email = formData.get("emailAddress");
    const name = formData.get("entry.217037522");
    const phone = formData.get("entry.1750356680");
    const message = formData.get("entry.1469967194");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Ingresá un email válido.";
    }

    if (!name || name.trim().length < 3) {
      newErrors.name = "El nombre debe tener al menos 3 caracteres.";
    }

    if (!phone || !/^[0-9+ ]{6,20}$/.test(phone)) {
      newErrors.phone = "Ingresá un teléfono válido.";
    }

    if (!message || message.trim().length < 10) {
      newErrors.message = "La consulta debe tener al menos 10 caracteres.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    if (!validate(formData)) return;

    // Enviar a Google Forms
    e.target.submit();

    // Mostrar mensaje
    setSent(true);

    // Limpiar formulario
    e.target.reset();

    // Limpiar mensaje luego de 5s
    setTimeout(() => {
      setSent(false);
    }, 5000);
  };

  return (
    <section id="contacto" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Contacto
        </h2>

        <p className="text-center text-neutral-600 mb-12">
          Dejanos tu consulta y nos comunicaremos a la brevedad.
        </p>

        <form
          ref={formRef}
          action="https://docs.google.com/forms/d/e/1FAIpQLScYXxKuvzTYTDqPH5sStGxRJuGYL9qqtDIqo2TnGLL_RWG_Iw/formResponse"
          method="POST"
          target="hidden_iframe"
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl border border-neutral-200 space-y-4"
        >
          <div>
            <input
              type="email"
              name="emailAddress"
              placeholder="Email"
              className="w-full rounded-lg border px-4 py-2"
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="entry.217037522"
              placeholder="Nombre completo"
              className="w-full rounded-lg border px-4 py-2"
            />
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              name="entry.1750356680"
              placeholder="Teléfono"
              className="w-full rounded-lg border px-4 py-2"
            />
            {errors.phone && (
              <p className="text-sm text-red-600">{errors.phone}</p>
            )}
          </div>

          <div>
            <textarea
              name="entry.1469967194"
              placeholder="Consulta"
              rows="4"
              className="w-full rounded-lg border px-4 py-2"
            />
            {errors.message && (
              <p className="text-sm text-red-600">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-neutral-900 py-3 text-white hover:bg-neutral-800 transition"
          >
            Enviar consulta
          </button>

          {sent && (
            <p className="text-sm text-green-600 text-center">
              Gracias, recibimos tu consulta. Nos comunicaremos a la brevedad.
            </p>
          )}
        </form>

        <iframe name="hidden_iframe" style={{ display: "none" }} />
      </div>
    </section>
  );
}

export default Contact;
