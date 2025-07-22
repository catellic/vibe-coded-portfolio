import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@juniordev.com",
      href: "mailto:hello@juniordev.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always excited to connect with fellow developers, potential collaborators, 
            or anyone interested in discussing tech. Let's build something amazing together!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-glow bg-card/50 backdrop-blur-sm animate-slide-in">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="Your name" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your@email.com" className="bg-background/50" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="What's this about?" className="bg-background/50" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="Tell me about your project or just say hello!" 
                  className="bg-background/50 min-h-[120px]"
                />
              </div>
              
              <Button variant="glow" size="lg" className="w-full">
                <Send className="h-5 w-5" />
                Send Message
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 animate-slide-in" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Let's Connect</h3>
                <p className="text-muted-foreground mb-8">
                  Whether you have a project in mind, want to collaborate, or just want to chat about 
                  the latest in web development, I'd love to hear from you. Don't hesitate to reach out!
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={info.label} className="flex items-center gap-4 group">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-accent/20 animate-slide-in" style={{animationDelay: '0.4s'}}>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Currently Available</h3>
                <p className="text-muted-foreground mb-6">
                  I'm actively seeking junior developer opportunities and 
                  freelance projects. Let's discuss how I can contribute to your team!
                </p>
                <div className="flex justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="ml-2 text-sm text-green-400">Available for work</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;