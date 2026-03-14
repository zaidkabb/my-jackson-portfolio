import { Card } from "@/components/ui/card";
import { Brain, Database, Cog, Code } from "lucide-react";

const About = () => {

  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-20">
          <p className="text-primary font-semibold mb-3 uppercase tracking-[0.2em] text-xs">About Us</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">Who Am I?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              <strong className="text-foreground font-semibold">Hi I'm Zaid Fuad</strong> - a Software, Data & AI Engineer based in Asendorf, Germany. With 4 years of experience in the field and 2 years specializing in backend development, I've built my expertise around creating scalable, data-driven solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              My journey started in Freetown, Sierra Leone, where I was born, and led me through completing my BSc in Computer Science at Njala University in 2020. Today, I focus on building multi-agent AI systems, microservices architectures, and cloud-native automation tools using cutting-edge technologies.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {[
              { icon: Brain, title: "AI & Data Engineering" },
              { icon: Database, title: "Backend & Cloud" },
              { icon: Cog, title: "Databricks & Terraform" },
              { icon: Code, title: "GCP & DevOps" },
            ].map((skill) => (
              <div key={skill.title} className="text-center space-y-4 group">
                <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto transition-all group-hover:bg-primary/10 group-hover:scale-110 duration-300">
                  <skill.icon className="h-9 w-9 text-primary" />
                </div>
                <h3 className="font-semibold text-sm text-foreground">{skill.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
