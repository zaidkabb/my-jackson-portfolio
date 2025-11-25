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
      title: "AI Analytics Platform",
      category: "AI & Data",
      description: "Multi-agent AI system for automated data analysis and insights generation.",
      tags: ["Python", "TensorFlow", "FastAPI"],
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop",
    },
    {
      title: "SaaS Dashboard",
      category: "Full Stack",
      description: "Modern analytics dashboard with real-time data visualization and reporting.",
      tags: ["React", "Node.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
    {
      title: "Cloud Automation Tool",
      category: "DevOps",
      description: "Cloud-native automation platform for infrastructure management and deployment.",
      tags: ["AWS", "Docker", "Kubernetes"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    },
    {
      title: "Data Pipeline System",
      category: "Data Engineering",
      description: "Scalable ETL pipeline for processing large-scale data streams in real-time.",
      tags: ["Apache Spark", "Kafka", "Python"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    },
    {
      title: "Microservices API",
      category: "Backend Development",
      description: "RESTful API architecture with microservices for enterprise applications.",
      tags: ["Node.js", "Express", "Redis"],
      image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=800&h=600&fit=crop",
    },
    {
      title: "No-Code CRM Platform",
      category: "No-Code",
      description: "Custom CRM solution built using no-code tools for rapid deployment.",
      tags: ["Airtable", "Zapier", "Make"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
    {
      title: "ML Model Deployment",
      category: "AI Solutions",
      description: "End-to-end machine learning pipeline with automated model training and deployment.",
      tags: ["PyTorch", "MLflow", "Docker"],
      image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section id="work" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-20">
          <p className="text-primary font-semibold mb-3 uppercase tracking-[0.2em] text-xs">Portfolio</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">My Recent Work</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 border-border/50 rounded-sm"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-6 flex items-center gap-2 text-white">
                    <ExternalLink className="h-5 w-5" />
                    <span className="font-medium">View Project</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-xs text-primary font-semibold mb-3 uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-normal">
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
