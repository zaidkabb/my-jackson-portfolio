import { Card } from "@/components/ui/card";
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
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">What I Do?</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Here are some of my expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
