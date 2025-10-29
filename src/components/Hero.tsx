import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-coding.jpg";

const Hero = () => {
  return (
    <section id="hero-section" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Coding workspace" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
      </div>
      
      {/* Ambient glowing orbs */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl motion-safe:animate-float" />
        <div className="absolute bottom-10 right-[-60px] h-80 w-80 rounded-full bg-accent/10 blur-3xl motion-safe:animate-float" style={{animationDelay: '1.5s'}} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Christian</span>{" "}
            <span className="text-foreground">Catelli</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Aspiring developer and vibe coder. I’m learning HTML, CSS, and JavaScript (beyond the basics) and about to start React.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="glow" size="lg" className="animate-glow-pulse" asChild>
              <a href="#projects" aria-label="View my projects">View My Work</a>
            </Button>
            <Button variant="neon" size="lg" asChild>
              <a href="#contact" aria-label="Contact me">Get In Touch</a>
            </Button>
          </div>
          
          {/* Social Links */}
          <div id="hero-socials" className="flex justify-center gap-6 mb-20">
            <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
              <a href="https://github.com/catellic" aria-label="GitHub profile" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-accent" asChild>
              <a href="https://www.linkedin.com/in/christian-catelli-695b89177" aria-label="LinkedIn profile" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
              <a href="mailto:c.catelli@icloud.com" aria-label="Send me an email">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div id="hero-scroll-indicator" className="pointer-events-none absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-accent rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-primary rounded-full animate-float" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default Hero;