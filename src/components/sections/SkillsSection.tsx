import { Code, Palette, Database, Cloud, Smartphone, Layers } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, Vue.js, TypeScript, Tailwind CSS",
    level: 95,
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, Python, PostgreSQL, MongoDB",
    level: 88,
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Adobe XD, Prototyping",
    level: 85,
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "AWS, Firebase, Docker, CI/CD",
    level: 80,
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native, Flutter",
    level: 75,
  },
  {
    icon: Layers,
    title: "Architecture",
    description: "System Design, Microservices",
    level: 82,
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            <span className="gradient-text">Kỹ năng</span> của tôi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Những công nghệ và kỹ năng tôi đã tích lũy qua nhiều năm làm việc
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="glass-card group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl glass flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <skill.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-semibold mb-2">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {skill.description}
              </p>

              {/* Progress Bar */}
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${skill.level}%`,
                    background: "var(--gradient-primary)",
                  }}
                />
              </div>
              <span className="text-sm text-muted-foreground mt-2 inline-block">
                {skill.level}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
