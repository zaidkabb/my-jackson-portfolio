import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Education = () => {
  const education = [
    {
      id: "1",
      degree: "IT Engineering (Incomplete)",
      institution: "FH Wedel – University of Applied Sciences",
      year: "",
      description:
        "Pursued studies in IT Engineering at FH Wedel, University of Applied Sciences in Germany.",
    },
    {
      id: "2",
      degree: "Bachelor of Science in Computer Science",
      institution: "Njala University",
      year: "September 2015 – October 2019",
      description:
        "Completed a Bachelor's degree in Computer Science at Njala University, building a strong foundation in software development, algorithms, and systems design.",
    },
  ];

  return (
    <section id="education" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-20">
          <p className="text-primary font-semibold mb-3 uppercase tracking-[0.2em] text-xs">Education</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Education</h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-6">
          {education.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="bg-secondary/20 rounded-sm px-8 py-2 border border-border/50 hover:border-primary/20 transition-all"
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="text-left">
                  <h3 className="text-xl font-bold">{item.degree}</h3>
                  <p className="text-sm text-muted-foreground font-light">{item.institution}</p>
                  {item.year && <p className="text-xs text-muted-foreground/70 font-light mt-1">{item.year}</p>}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-6 font-light leading-relaxed">
                <p>{item.description}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Education;
