import Header from "../components/Header";
import Hero from "../components/Hero";
import Problems from "../components/Problems";
import Services from "../components/Services";
import About from "../components/About";
import HowWeWork from "../components/HowWeWork";
import Contact from "../components/Contact";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-16 min-h-screen bg-white text-neutral-900">
        <Hero />
        <Problems />
        <Services />
        <About />
        <HowWeWork />
        <Contact />
        <WhatsAppButton />
      </main>

      <Footer />
    </>
  );
}
