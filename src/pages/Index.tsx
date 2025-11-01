import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Training from "@/components/Training";
import About from "@/components/About";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Training />
      <About />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
