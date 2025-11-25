import { Brain, Code, Cog, Database, Layers, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Building intelligent multi-agent AI systems and machine learning solutions",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Designing scalable data pipelines and analytics infrastructure",
    },
    {
      icon: Cog,
      title: "Automation",
      description: "Creating cloud-native automation tools and workflow optimization",
    },
    {
      icon: Code,
      title: "Backend Development",
      description: "Developing robust microservices architectures and APIs",
    },
    {
      icon: Layers,
      title: "Full Stack Development",
      description: "Building end-to-end web applications with modern technologies",
    },
    {
      icon: Zap,
      title: "No-Code Solutions",
      description: "Rapid prototyping and development using no-code platforms",
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary/20">
      <div className="container-narrow">
        <div className="text-center mb-20">
          <p className="text-primary font-semibold mb-3 uppercase tracking-[0.2em] text-xs">What I do?</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">Here are some of my expertise</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="text-center p-10 bg-background rounded-sm hover:shadow-xl transition-all duration-300 group border border-border/50 hover:border-primary/20"
            >
              <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-primary/10 transition-all group-hover:scale-110 duration-300">
                <service.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-5 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
