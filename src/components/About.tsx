import { Card } from "@/components/ui/card";
import { Palette, Monitor, Code, Smartphone } from "lucide-react";

const About = () => {

  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Who Am I?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-base text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Hi I'm Zaid Fuad</strong> - a Software, Data & AI Engineer based in Asendorf, Germany. With 4 years of experience in the field and 2 years specializing in backend development, I've built my expertise around creating scalable, data-driven solutions.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              My journey started in Freetown, Sierra Leone, where I was born, and led me through completing my BSc in Computer Science at Njala University in 2020. Today, I focus on building multi-agent AI systems, microservices architectures, and cloud-native automation tools using cutting-edge technologies.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Palette, title: "Graphic Design" },
              { icon: Monitor, title: "Web Design" },
              { icon: Code, title: "Software" },
              { icon: Smartphone, title: "Application" },
            ].map((skill) => (
              <div key={skill.title} className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <skill.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">{skill.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
