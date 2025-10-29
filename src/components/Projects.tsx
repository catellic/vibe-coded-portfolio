import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const BASE_URL = import.meta.env.BASE_URL || '/';
const PLACEHOLDER_SRC = `${BASE_URL}placeholder.svg`;

const Projects = () => {
  const projects = [
    // Handmade projects
    {
      title: "Scissor Paper Rock",
      description: "Play rock-paper-scissors against the computer with live score and replay.",
      technologies: ["JavaScript", "HTML", "CSS"],
      demoUrl: "https://catellic.github.io/scissor-paper-rock/",
      githubUrl: "https://github.com/catellic/scissor-paper-rock",
      image: "https://catellic.github.io/scissor-paper-rock/home.png",
      imageCandidates: [
        "https://catellic.github.io/scissor-paper-rock/home.png",
        "https://raw.githubusercontent.com/catellic/scissor-paper-rock/main/home.png"
      ]
    },
    {
      title: "Etch-a-Sketch",
      description: "Interactive drawing grid: paint on hover/click, reset and resize controls.",
      technologies: ["JavaScript", "HTML", "CSS"],
      demoUrl: "https://catellic.github.io/etch-a-sketch/",
      githubUrl: "https://github.com/catellic/etch-a-sketch",
      image: "https://raw.githubusercontent.com/catellic/etch-a-sketch/main/home.png",
      imageCandidates: [
        "https://raw.githubusercontent.com/catellic/etch-a-sketch/main/home.png",
        "https://catellic.github.io/etch-a-sketch/home.png"
      ]
    },
    {
      title: "Calculator",
      description: "A simple, accessible calculator implementing basic arithmetic operations.",
      technologies: ["JavaScript", "HTML", "CSS"],
      demoUrl: "https://catellic.github.io/calculator/",
      githubUrl: "https://github.com/catellic/calculator",
      image: "https://raw.githubusercontent.com/catellic/calculator/main/home.png",
      imageCandidates: [
        "https://raw.githubusercontent.com/catellic/calculator/main/home.png",
        "https://catellic.github.io/calculator/screenshot.png",
        "https://catellic.github.io/calculator/preview.png"
      ]
    },
    {
      title: "Landing Page",
      description: "A responsive landing page built with modern semantic HTML and CSS.",
      technologies: ["HTML", "CSS"],
      demoUrl: "https://catellic.github.io/landing-page/",
      githubUrl: "https://github.com/catellic/landing-page",
      image: "https://raw.githubusercontent.com/catellic/landing-page/main/home.png",
      imageCandidates: [
        "https://raw.githubusercontent.com/catellic/landing-page/main/home.png",
        "https://catellic.github.io/landing-page/screenshot.png",
        "https://catellic.github.io/landing-page/preview.png"
      ]
    },
    // Vibe-coded projects
    {
      title: "Pong Game (vibe-coded)",
      description: "A browser-based Pong clone with keyboard controls and simple physics.",
      technologies: ["JavaScript", "HTML", "CSS"],
      demoUrl: "https://catellic.github.io/pong-game/",
      githubUrl: "https://github.com/catellic/pong-game",
      image: "https://raw.githubusercontent.com/catellic/pong-game/main/home.png",
      imageCandidates: [
        "https://raw.githubusercontent.com/catellic/pong-game/main/home.png",
        "https://catellic.github.io/pong-game/screenshot.png",
        "https://catellic.github.io/pong-game/preview.png"
      ]
    },
    {
      title: "Portfolio (vibe-coded)",
      description: "This portfolio site — styled UI components and smooth animations.",
      technologies: ["Vite", "React", "TypeScript", "Tailwind CSS"],
      demoUrl: "https://catellic.github.io/vibe-coded-portfolio/",
      githubUrl: "https://github.com/catellic/vibe-coded-portfolio",
      image: "https://raw.githubusercontent.com/catellic/vibe-coded-portfolio/main/public/home.png",
      imageCandidates: [
        "https://raw.githubusercontent.com/catellic/vibe-coded-portfolio/main/public/og-image.png",
        "https://raw.githubusercontent.com/catellic/vibe-coded-portfolio/main/public/home.png"
      ]
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
              id={`project-card-${index}`}
              className="card-glow bg-card/50 backdrop-blur-sm animate-slide-in overflow-hidden group motion-safe:hover:animate-tilt"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  id={`project-image-${index}`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  data-candidates={(project as any).imageCandidates?.join('|')}
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    const tried = Number(img.dataset.tried || '0');
                    const candidates = (img.dataset.candidates || '').split('|').filter(Boolean);
                    if (tried < candidates.length) {
                      img.src = candidates[tried];
                      img.dataset.tried = String(tried + 1);
                    } else {
                      img.src = PLACEHOLDER_SRC;
                      img.onerror = null;
                    }
                  }}
                />
                {/* Shine overlay */}
                <div className="pointer-events-none absolute inset-0 -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-y-0 -left-1/4 w-1/3 bg-white/10 blur-md motion-safe:animate-shine"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" variant="secondary" className="h-8 w-8" asChild>
                    <a href={project.demoUrl} aria-label={`Open demo for ${project.title}`} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="icon" variant="secondary" className="h-8 w-8" asChild>
                    <a href={project.githubUrl} aria-label={`Open code for ${project.title}`} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
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
                  <Button size="sm" variant="glow" className="flex-1" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open demo for ${project.title}`}>
                      <>
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </>
                    </a>
                  </Button>
                  <Button size="sm" variant="neon" className="flex-1" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open code for ${project.title}`}>
                      <>
                        <Github className="h-4 w-4" />
                        Code
                      </>
                    </a>
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
          <Button variant="neon" size="lg" asChild>
            <a href="https://github.com/catellic" target="_blank" rel="noopener noreferrer" aria-label="Open Christian's GitHub profile">
              <>
                <Github className="h-5 w-5" />
                View All Projects on GitHub
              </>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;