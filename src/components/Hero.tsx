import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/profile-professional.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-start relative overflow-hidden"
    >
      {/* Background Image - Right Side */}
      <div className="absolute inset-0 lg:left-1/2">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent lg:from-background lg:via-background/80 lg:to-transparent"></div>
      </div>

      {/* Content - Left Side */}
      <div className="relative z-10 section-padding w-full lg:w-1/2">
        <div className="space-y-6 max-w-xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi!
            <br />
            I'm <span className="text-primary">Jackson</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            100% html5 bootstrap templates Made by Lovable
          </p>
          <div className="flex gap-4 pt-4">
            <Button size="lg" className="gap-2">
              <Download className="h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
