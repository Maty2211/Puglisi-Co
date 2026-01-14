import { useState } from "react";
import api from "../services/api";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null); // limpia error al volver a escribir
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      await api.post("/contact/", form);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError("Por favor, complete todos los campos correctamente.");
      } else {
        setError(
          "Ocurrió un error al enviar la consulta. Intente nuevamente más tarde."
        );
      }
    } finally {
      setLoading(false);
    }
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
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl border border-neutral-200 space-y-6"
        >
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nombre"
            className="w-full rounded-lg border px-4 py-2"
            required
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full rounded-lg border px-4 py-2"
            required
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            placeholder="Consulta"
            className="w-full rounded-lg border px-4 py-2"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-neutral-900 py-3 text-white disabled:opacity-60"
          >
            {loading ? "Enviando..." : "Enviar consulta"}
          </button>

          {success && (
            <p className="text-sm text-green-600 text-center">
              Gracias por su consulta. Nos pondremos en contacto a la brevedad.
            </p>
          )}

          {error && (
            <p className="text-sm text-red-600 text-center">
              {error}
            </p>
          )}

          <p className="text-xs text-neutral-500 text-center">
            Respondemos dentro de las 24/48 horas hábiles.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
