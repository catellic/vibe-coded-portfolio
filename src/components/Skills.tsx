import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 60, color: "bg-orange-500" },
        { name: "JavaScript", level: 50, color: "bg-yellow-500" },
        { name: "TypeScript", level: 10, color: "bg-blue-600" },
        { name: "Tailwind CSS", level: 10, color: "bg-cyan-500" },
        { name: "React", level: 0, color: "bg-blue-500" }
      ]
    },
    {
      category: "Backend & Tools",
      skills: [
        { name: "Git/GitHub", level: 60, color: "bg-gray-600" },
        { name: "Node.js", level: 30, color: "bg-green-500" },
        { name: "REST APIs", level: 30, color: "bg-purple-500" },
        { name: "Vite", level: 10, color: "bg-purple-600" },
        { name: "MongoDB", level: 10, color: "bg-green-600" }
      ]
    }
  ];

  const technologies = [
    "HTML5", "CSS3", "JavaScript", "TypeScript", "React", 
    "Tailwind CSS", "Git", "GitHub", "Vite", "REST APIs", "Node.js", "MongoDB", 
    "Responsive Design", "ES6+", "JSON", "npm"
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are the technologies and tools I've been working with. 
            I'm always learning and adding new skills to my toolkit.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.category} 
              className="card-glow bg-card/50 backdrop-blur-sm animate-slide-in"
              style={{animationDelay: `${categoryIndex * 0.2}s`}}
            >
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                      style={{animationDelay: `${(categoryIndex * 5 + index) * 0.1}s`}}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl text-center gradient-text">
              Technologies & Tools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="px-4 py-2 bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default animate-fade-in"
                  style={{animationDelay: `${index * 0.05}s`}}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;