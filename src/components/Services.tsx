import { Lightbulb, Code, Smartphone, Palette, Layers, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Innovative Ideas",
      description: "Bringing creative solutions to complex problems with innovative thinking and fresh perspectives.",
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Building robust and scalable applications with modern technologies and best practices.",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Creating seamless mobile experiences for iOS and Android platforms.",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Designing beautiful visual identities that capture your brand's essence.",
    },
    {
      icon: Layers,
      title: "UI/UX Design",
      description: "Crafting intuitive user interfaces with exceptional user experiences.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and scalability.",
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">What I Do?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Here are some of my expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
