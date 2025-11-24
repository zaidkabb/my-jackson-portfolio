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
    <section id="experience" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Work Experience</h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-b border-border pb-8 last:border-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <h3 className="text-xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer">
                  {exp.title}
                </h3>
                <span className="text-base font-medium text-primary">{exp.year}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
