import Navbar from "./components/Navbar";
import { Contact, FAQ, Footer, GreenEnergy, Hero, Stories } from "./sections";

export default function App() {
  return (
    <main className="relative ">
      <Navbar />
    
    <section className="pt-20">
      <Hero />
    </section>

    <section className="mt-10">
      <GreenEnergy />
    </section>

    <section className="mt-10">
      <FAQ />
    </section>

    <section className="mt-10">
      <Stories />
    </section>

    <section>
      <Contact />
    </section>

    <section>
      <Footer />
    </section>

    </main>

  )
}