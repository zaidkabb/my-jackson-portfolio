import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="lg:ml-72">
        <Hero />
        <About />
        <Stats />
        <Services />
        <Skills />
        <Education />
        <Experience />
        <Work />
        <Blog />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
