function About() {
  return (
    <section className="py-24 px-6 bg-neutral-50">
      <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-6">
            Sobre mí
          </h2>

          <p className="text-neutral-700 leading-relaxed mb-4">
            Cuento con más de 35 años de experiencia en liquidación de sueldos,
            gestión laboral y asesoramiento en cumplimiento normativo.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4">
            Soy Posgraduada por la Universidad Nacional de La Plata (UNLP),
            con una fuerte orientación a la prevención de riesgos laborales.
          </p>

          <p className="text-neutral-700 leading-relaxed">
            Acompaño a empresas y estudios contables ante auditorías,
            inspecciones y reorganización de procesos internos.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-2xl bg-neutral-200 flex items-center justify-center text-neutral-500">
            <img src="../img/FotoPresentacion.jpg" alt="Foto presentacion" className="w-full h-full object-cover rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
