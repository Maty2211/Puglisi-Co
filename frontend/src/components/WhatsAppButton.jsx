function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5492216561405"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50
                 bg-neutral-900 text-white
                 px-4 py-3 rounded-full
                 shadow-lg
                 hover:bg-neutral-800 transition"
      aria-label="Contactar por WhatsApp"
    >
      WhatsApp
    </a>
  );
}

export default WhatsAppButton;
