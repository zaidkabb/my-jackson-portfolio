import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skills = [
    { name: "Photoshop", level: 75 },
    { name: "jQuery", level: 60 },
    { name: "HTML5", level: 85 },
    { name: "CSS3", level: 90 },
    { name: "WordPress", level: 70 },
    { name: "SEO", level: 80 },
  ];

  const stats = [
    { number: "309", label: "Cups of coffee" },
    { number: "356", label: "Projects" },
    { number: "30", label: "Clients" },
    { number: "10", label: "Partners" },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">My Specialty</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The Big Oxmox advised her not to do so, because there were thousands of bad Commas,
            wild Question Marks and devious Semikoli, but the Little Blind Text didn't listen.
            She packed her seven versalia, put her initial into the belt and made herself on the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
