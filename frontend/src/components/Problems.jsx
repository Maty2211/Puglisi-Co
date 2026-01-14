function Problems() {
  const problems = [
    "¿Teme que una inspección de AFIP o del Ministerio detecte errores en sus legajos?",
    "¿El cálculo del Impuesto a las Ganancias de sus empleados es un conflicto constante?",
    "¿Siente que su estudio contable solo liquida sueldos pero no le advierte riesgos?",
    "¿Tiene dudas sobre si está aplicando correctamente el Convenio Colectivo correspondiente?",
  ];

  return (
    <section className="py-24 px-6 bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          ¿Se siente identificado con alguna de estas situaciones?
        </h2>

        <div className="space-y-6">
          {problems.map((text, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-200 rounded-xl p-6 text-neutral-700"
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Problems;
