import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Coffee, Lightbulb, Users } from "lucide-react";

const About = () => {
  const traits = [
    {
      icon: Code,
      title: "Problem Solver",
      description: "I love breaking down complex problems into manageable pieces and finding creative solutions."
    },
    {
      icon: Lightbulb,
      title: "Quick Learner",
      description: "Always eager to learn new technologies and adapt to evolving industry standards."
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative mindset with strong communication skills and a passion for shared success."
    },
    {
      icon: Coffee,
      title: "Dedicated",
      description: "Committed to writing clean, efficient code and continuously improving my craft."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a junior developer with a passion for creating beautiful, functional web applications. 
            My journey in tech started with curiosity and has grown into a genuine love for problem-solving through code.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {traits.map((trait, index) => (
            <Card 
              key={trait.title} 
              className="card-glow animate-slide-in bg-card/50 backdrop-blur-sm"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="text-center">
                <trait.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-xl">{trait.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{trait.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  My coding journey began with simple HTML and CSS experiments, but quickly evolved into a 
                  fascination with JavaScript and modern web frameworks. I've spent countless hours building 
                  projects, reading documentation, and learning from the amazing developer community.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new tech blogs, contributing to open source 
                  projects, or experimenting with the latest web technologies. I believe in continuous learning 
                  and am always excited to take on new challenges.
                </p>
                <p>
                  I'm currently seeking opportunities to grow as a developer in a collaborative environment 
                  where I can contribute to meaningful projects while continuing to expand my skills.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;