import { Card } from "@/components/ui/card";
import { Palette, Monitor, Code, Smartphone } from "lucide-react";

const About = () => {

  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold">Who Am I?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Hi I'm Jackson Ford</strong> On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Palette, title: "Graphic Design" },
              { icon: Monitor, title: "Web Design" },
              { icon: Code, title: "Software" },
              { icon: Smartphone, title: "Application" },
            ].map((skill) => (
              <div key={skill.title} className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">{skill.title}</h3>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;
