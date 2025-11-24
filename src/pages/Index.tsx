import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import ChatbotButton from "@/components/ChatbotButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="lg:ml-72">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Education />
        <Experience />
        <Work />
        <Contact />
      </main>
      <ChatbotButton />
    </div>
  );
};

export default Index;
