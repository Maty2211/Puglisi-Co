function Services() {
  const services = [
    {
      title: "Outsourcing de Payroll",
      description:
        "Liquidación integral de sueldos para PyMEs. Garantizamos puntualidad, precisión técnica y cumplimiento normativo en cada proceso.",
    },
    {
      title: "Auditoría de Cumplimiento Laboral",
      description:
        "Revisión completa de legajos, contratos, cargas sociales y situación previsional. Detectamos y corregimos riesgos antes de una inspección.",
    },
    {
      title: "Consultoría Especializada",
      description:
        "Asesoramiento en Impuesto a las Ganancias (4ta categoría), regímenes especiales y acompañamiento profesional ante inspecciones de ARCA y organismos laborales.",
    },
  ];

  return (
    <section id="servicios" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-16">
          Servicios
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-neutral-200 rounded-2xl p-8 hover:shadow-sm transition"
            >
              <h3 className="text-xl font-medium mb-4">
                {service.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
