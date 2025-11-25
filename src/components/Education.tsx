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
    <section id="education" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">Education</p>
          <h2 className="text-4xl md:text-5xl font-bold">Education</h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {education.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="bg-background rounded-lg px-6 border"
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="text-left">
                  <h3 className="text-lg font-bold">{item.degree}</h3>
                  <p className="text-sm text-muted-foreground">{item.year}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                <p>{item.description}</p>
                {item.points && (
                  <ul className="list-disc list-inside mt-4 space-y-2">
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
