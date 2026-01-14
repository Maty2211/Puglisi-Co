

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Nombre */}
        <a href="#top" className="text-xl font-semibold cursor-pointer">
          Puglisi&Co
        </a>


        {/* Navegación */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
          <a href="#servicios" className="hover:text-neutral-900 transition">
            Servicios
          </a>
          <a href="#como-trabajamos" className="hover:text-neutral-900 transition">
            Cómo trabajamos
          </a>
          <a href="#contacto" className="hover:text-neutral-900 transition">
            Contacto
          </a>
        </nav>

        {/* CTA */}
        <a href="#contacto" className="px-4 py-2 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 transition">
          Solicitar asesoramiento
        </a>
        
      </div>
    </header>
  );
}

export default Header;