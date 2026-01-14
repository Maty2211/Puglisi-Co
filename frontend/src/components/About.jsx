import { motion } from "framer-motion";
import profileImg from "../img/profileImg.jpeg";

function About() {
  return (
    <section id="sobre-mi" className="py-24 px-6 bg-neutral-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Texto */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">Sobre mí</h2>

          <p className="text-neutral-700 mb-4">
            Cuento con más de 35 años de experiencia en liquidación de
            sueldos, gestión laboral y asesoramiento en cumplimiento
            normativo.
          </p>

          <p className="text-neutral-700 mb-4">
            Soy Posgraduada por la Universidad Nacional de La Plata (UNLP),
            con una fuerte orientación a la prevención de riesgos laborales.
          </p>

          <p className="text-neutral-700 mb-4">
            Acompaño a empresas y estudios contables ante auditorías,
            inspecciones y reorganización de procesos internos.
          </p>


          <p className="text-neutral-700">
            Transforme la liquidación de sueldos en un proceso eficiente, 
            claro y alineado a la normativa vigente, evitando contingencias 
            legales y sanciones.
          </p>
        </div>

        {/* Foto */}
        <div className="flex justify-center">
          <img
            src={profileImg}
            alt="Consultora en liquidación de sueldos y gestión laboral"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-md"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default About;
