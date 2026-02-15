import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/profile-professional.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-start relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background"
    >
      {/* Background Image - Right Side */}
      <div className="absolute inset-0 lg:left-1/2">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/98 to-background/30 lg:from-background lg:via-background/90 lg:to-background/20"></div>
      </div>

      {/* Content - Left Side */}
      <div className="relative z-10 section-padding w-full lg:w-1/2">
        <div className="space-y-8 max-w-2xl animate-fade-in">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-4">
              Hi!
              <br />
              <span className="text-foreground">I'm </span>
              <span className="text-primary">Zaid</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-light tracking-wide">
              Software, Data & AI Engineer
            </p>
          </div>
          <div className="flex gap-4 pt-2">
            <a href="/Zaid_Fuad_Kabba_CV.pdf" download>
              <Button size="lg" className="gap-2 px-8 py-6 text-base rounded-sm shadow-lg hover:shadow-xl transition-all">
                <Download className="h-5 w-5" />
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
