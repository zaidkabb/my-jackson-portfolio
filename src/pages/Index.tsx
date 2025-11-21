import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="lg:ml-72">
        <Hero />
        <About />
        <Services />
        <Work />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
