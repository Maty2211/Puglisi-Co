import { motion } from "framer-motion";
import Header from "../components/Header";
import api from "../services/api";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-16 min-h-screen bg-white text-neutral-900">
        <Hero />
        <Services />
        <HowWeWork />
        <Contact />
      </main>
    </>
  );
}


function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl text-center"
      >
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Liquidación de sueldos
          <br />
          <span className="text-neutral-500">
            y gestión de Recursos Humanos
          </span>
        </h1>

        <p className="mt-6 text-lg text-neutral-600">
          Acompañamos a empresas y familias en la administración correcta
          de su personal, asegurando cumplimiento legal, claridad y tranquilidad.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 transition">
            Solicitar asesoramiento
          </button>

          <button className="px-6 py-3 rounded-xl border border-neutral-300 hover:bg-neutral-100 transition">
            Conocer servicios
          </button>
        </div>
      </motion.div>
    </section>
  );
}


function Services() {
  const services = [
    {
      title: "Liquidación de sueldos",
      description:
        "Cálculo preciso de haberes, descuentos y cargas sociales conforme a la normativa vigente.",
    },
    {
      title: "Administración de personal",
      description:
        "Altas, bajas, legajos, contratos y seguimiento integral del personal.",
    },
    {
      title: "Asesoramiento laboral",
      description:
        "Orientación en normativa laboral, convenios colectivos y buenas prácticas.",
    },
  ];

  return (
    <section id="servicios" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-16">
          Servicios
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-neutral-200 hover:shadow-md transition"
            >
              <h3 className="text-xl font-medium mb-4">
                {service.title}
              </h3>
              <p className="text-neutral-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowWeWork() {
  const steps = [
    {
      title: "Diagnóstico inicial",
      description:
        "Analizamos la situación actual de la empresa o familia, evaluando necesidades y normativa aplicable.",
    },
    {
      title: "Propuesta clara",
      description:
        "Definimos un plan de trabajo concreto, transparente y adaptado a cada caso.",
    },
    {
      title: "Ejecución y seguimiento",
      description:
        "Realizamos la gestión acordada y acompañamos de forma continua ante cambios o consultas.",
    },
  ];

  return (
    <section
      id="como-trabajamos"
      className="py-24 px-6 bg-white"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold text-center mb-16"
        >
          Cómo trabajamos
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 text-sm font-medium">
                {index + 1}
              </div>

              <h3 className="text-lg font-medium mb-2">
                {step.title}
              </h3>

              <p className="text-neutral-600 text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await api.post("/contact/", form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
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
            disabled={status === "loading"}
            className="w-full rounded-xl bg-neutral-900 py-3 text-white"
          >
            Enviar consulta
          </button>

          {status === "success" && (
            <p className="text-sm text-green-600 text-center">
              Consulta enviada correctamente.
            </p>
          )}

          {status === "error" && (
            <p className="text-sm text-red-600 text-center">
              Ocurrió un error. Intentá nuevamente.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
