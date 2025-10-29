import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "https://github.com/catellic", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/christian-catelli-695b89177", label: "LinkedIn" },
    { icon: Mail, href: "mailto:c.catelli@icloud.com", label: "Email" }
  ];

  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text">Christian Catelli</h3>
            <p className="text-muted-foreground">Aspiring developer & vibe coder</p>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <a href={social.href} aria-label={social.label}>
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Christian Catelli. Made with{" "}
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;