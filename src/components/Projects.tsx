import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Task Management App",
      description: "A modern React-based task manager with drag-and-drop functionality, local storage persistence, and responsive design. Features include task categorization, priority levels, and progress tracking.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      demoUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application that provides current conditions and 5-day forecasts. Includes location-based weather detection, unit conversion, and beautiful animated weather icons.",
      technologies: ["JavaScript", "API Integration", "CSS3", "HTML5"],
      demoUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio showcasing my projects and skills. Built with modern web technologies and featuring smooth animations, dark theme, and optimized performance.",
      technologies: ["React", "Vite", "Tailwind CSS", "TypeScript"],
      demoUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&crop=center"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of the projects I've been working on. Each one represents a learning journey 
            and showcases different aspects of my development skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="card-glow bg-card/50 backdrop-blur-sm animate-slide-in overflow-hidden group"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" variant="secondary" className="h-8 w-8">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="h-8 w-8">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl gradient-text">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="glow" className="flex-1">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button>
                  <Button size="sm" variant="neon" className="flex-1">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button variant="neon" size="lg">
            <Github className="h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;