import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="top" className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl text-center"
      >
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Seguridad jurídica
          <br />
          <span className="text-neutral-500">
            y precisión técnica para su nómina
          </span>
        </h1>

        <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto">
          Transforme la liquidación de sueldos en un proceso eficiente, claro y alineado a la normativa vigente, evitando contingencias legales y sanciones.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a href="#contacto" className="px-6 py-3 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 transition">
            Solicitar asesoramiento
          </a>

          <a href="#servicios" className="px-6 py-3 rounded-xl border border-neutral-300 hover:bg-neutral-100 transition">
            Conocer servicios
          </a>
        </div>
        
      </motion.div>
    </section>
  );
}

export default Hero;