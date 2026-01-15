import { useState } from "react";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    setSent(true);
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
          action="https://docs.google.com/forms/d/e/1FAIpQLScYXxKuvzTYTDqPH5sStGxRJuGYL9qqtDIqo2TnGLL_RWG_Iw/formResponse"
          method="POST"
          target="hidden_iframe"
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl border border-neutral-200 space-y-6"
        >
          <input
            type="email"
            name="emailAddress"
            placeholder="Email"
            required
            className="w-full rounded-lg border px-4 py-2"
          />

          <input
            type="text"
            name="entry.217037522"
            placeholder="Nombre completo"
            required
            className="w-full rounded-lg border px-4 py-2"
          />

          <textarea
            name="entry.1469967194"
            placeholder="Consulta"
            required
            className="w-full rounded-lg border px-4 py-2"
          />

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
