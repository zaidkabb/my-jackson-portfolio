import { Card } from "@/components/ui/card";
import { Palette, Monitor, Code, Smartphone } from "lucide-react";
import profileCasual from "@/assets/profile-casual.jpg";

const About = () => {
  const skills = [
    { icon: Palette, title: "Graphic Design", color: "text-blue-500" },
    { icon: Monitor, title: "Web Design", color: "text-green-500" },
    { icon: Code, title: "Software", color: "text-purple-500" },
    { icon: Smartphone, title: "Application", color: "text-orange-500" },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold">Who Am I?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Hi, I'm a passionate designer and developer</strong> with a love for creating beautiful, functional digital experiences. I specialize in turning ideas into reality through thoughtful design and clean code.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With years of experience in the field, I've worked on numerous projects ranging from web applications to mobile interfaces. My approach combines creativity with technical expertise to deliver solutions that not only look great but also perform exceptionally.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={profileCasual}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <Card key={skill.title} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <skill.icon className={`h-12 w-12 mx-auto mb-4 ${skill.color}`} />
              <h3 className="font-semibold text-lg">{skill.title}</h3>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-primary/5 rounded-2xl text-center">
          <h3 className="text-3xl font-bold mb-4">
            I am happy to know you that{" "}
            <span className="text-primary">300+ projects</span> done successfully!
          </h3>
          <p className="text-muted-foreground mb-6">
            Let's work together to bring your vision to life
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
