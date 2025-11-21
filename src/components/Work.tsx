import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Work = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A full-featured online shopping platform with payment integration and inventory management.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure and intuitive mobile banking application with biometric authentication.",
      tags: ["React Native", "TypeScript", "Firebase"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    },
    {
      title: "Brand Identity Design",
      category: "Graphic Design",
      description: "Complete brand identity package including logo, colors, and visual guidelines.",
      tags: ["Illustrator", "Figma", "Branding"],
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
    },
    {
      title: "SaaS Dashboard",
      category: "UI/UX Design",
      description: "Modern analytics dashboard with real-time data visualization and reporting.",
      tags: ["Figma", "React", "Charts"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile Development",
      description: "Health and fitness application with workout plans and progress tracking.",
      tags: ["Swift", "HealthKit", "CoreData"],
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
    },
    {
      title: "Restaurant Website",
      category: "Web Design",
      description: "Elegant website for a fine dining restaurant with online reservation system.",
      tags: ["Next.js", "Tailwind", "Strapi"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section id="work" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold">My Recent Work</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 flex items-center gap-2 text-white">
                    <ExternalLink className="h-5 w-5" />
                    <span className="font-medium">View Project</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
