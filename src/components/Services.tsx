import { Lightbulb, Code, Smartphone, Palette, Database, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Innovative Ideas",
      description: "Separated they live in Bookmarksgrove right at the coast of the Semantics",
    },
    {
      icon: Code,
      title: "Software",
      description: "Separated they live in Bookmarksgrove right at the coast of the Semantics",
    },
    {
      icon: Smartphone,
      title: "Application",
      description: "Separated they live in Bookmarksgrove right at the coast of the Semantics",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Separated they live in Bookmarksgrove right at the coast of the Semantics",
    },
    {
      icon: Database,
      title: "Software",
      description: "Separated they live in Bookmarksgrove right at the coast of the Semantics",
    },
    {
      icon: Globe,
      title: "Application",
      description: "Separated they live in Bookmarksgrove right at the coast of the Semantics",
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">What I do?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Here are some of my expertise</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="text-center p-8 bg-background rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
