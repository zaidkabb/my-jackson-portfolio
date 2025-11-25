const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Tech Company",
      year: "2017-2018",
      description:
        "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.",
    },
    {
      title: "Front End Developer at Google Company",
      company: "Google",
      year: "2017-2018",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
    },
    {
      title: "System Analyst",
      company: "Software Solutions",
      year: "2017-2018",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
    },
    {
      title: "Creative Designer",
      company: "Design Studio",
      year: "2017-2018",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
    },
    {
      title: "UI/UX Designer at Envato",
      company: "Envato",
      year: "2017-2018",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
    },
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/20">
      <div className="container-narrow">
        <div className="text-center mb-20">
          <p className="text-primary font-semibold mb-3 uppercase tracking-[0.2em] text-xs">Experience</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">Work Experience</h2>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="border-b border-border/50 pb-12 last:border-0 hover:border-primary/20 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                <h3 className="text-2xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer">
                  {exp.title}
                </h3>
                <span className="text-base font-medium text-primary">{exp.year}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed font-light text-lg">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
