export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-neutral-600 flex flex-col gap-4 md:flex-row md:justify-between">
        
        <div>
          <p className="font-medium text-neutral-800">
            Servicios Familia
          </p>
          <p>
            Consultoría en liquidación de sueldos y gestión de Recursos Humanos
          </p>
        </div>

        <div className="text-neutral-500">
          <p>Contacto: liquidohaberes@gmail.com</p>
          <p>Argentina</p>
        </div>
      </div>

      <div className="text-center text-xs text-neutral-500 py-4 border-t border-neutral-200">
        © {new Date().getFullYear()} Servicios Familia. Todos los derechos reservados.
      </div>
    </footer>
  );
}
