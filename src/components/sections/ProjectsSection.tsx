import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Nền tảng thương mại điện tử hoàn chỉnh với thanh toán, quản lý đơn hàng và phân tích dữ liệu.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "Ứng dụng quản lý công việc với tính năng cộng tác thời gian thực và thông báo.",
    tags: ["Vue.js", "Firebase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Content Generator",
    description:
      "Công cụ tạo nội dung thông minh sử dụng AI để viết bài viết, email marketing.",
    tags: ["Python", "OpenAI", "FastAPI", "React"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-20 px-4">
      {/* Background Orb */}
      <div className="floating-orb w-72 h-72 bg-accent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Dự án <span className="gradient-text">nổi bật</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Một số dự án tiêu biểu mà tôi đã thực hiện
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card overflow-hidden group animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s`, opacity: 0 }}
            >
              {/* Image */}
              <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.liveUrl}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
                    aria-label="View Live"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
                    aria-label="View Code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full glass text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
