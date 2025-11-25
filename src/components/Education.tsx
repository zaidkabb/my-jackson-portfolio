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
      degree: "Master Degree Graphic Design",
      year: "2015-2016",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      id: "2",
      degree: "Bachelor Degree of Computer Science",
      year: "2014-2015",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      points: [
        "Separated they live in Bookmarksgrove right",
        "Separated they live in Bookmarksgrove right",
      ],
    },
    {
      id: "3",
      degree: "Diploma in Information Technology",
      year: "2013-2014",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
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
                  <p className="text-sm text-muted-foreground font-light">{item.year}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-6 font-light leading-relaxed">
                <p>{item.description}</p>
                {item.points && (
                  <ul className="list-disc list-inside mt-6 space-y-2">
                    {item.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Education;
