import { motion } from "framer-motion";

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

export default HowWeWork;