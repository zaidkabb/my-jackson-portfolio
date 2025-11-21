import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-background to-secondary/30"
    >
      <div className="container-narrow text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Hi!
          <br />
          <span className="text-gradient">I'm a Designer</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Creating beautiful and functional digital experiences through thoughtful design and clean code.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Button size="lg" className="gap-2">
            <Download className="h-5 w-5" />
            Download CV
          </Button>
          <Button size="lg" variant="outline" onClick={() => {
            document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            View Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
