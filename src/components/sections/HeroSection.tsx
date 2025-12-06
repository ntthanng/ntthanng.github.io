import avatarImage from "@/assets/avatar.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Floating Orbs */}
      <div className="floating-orb w-96 h-96 bg-primary -top-20 -left-20 animate-float" />
      <div className="floating-orb w-80 h-80 bg-secondary top-1/3 -right-10 animate-float-delayed" />
      <div className="floating-orb w-64 h-64 bg-accent bottom-20 left-1/4 animate-pulse-slow" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <div className="mb-8 animate-scale-in">
          <div className="relative inline-block">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden glass-card p-1 gradient-border">
              <img
                src={avatarImage}
                alt="Profile Avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {/* Online indicator */}
            <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-green-500 border-2 border-background animate-pulse" />
          </div>
        </div>

        {/* Name & Title */}
        <div className="animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Xin chào, tôi là{" "}
            <span className="gradient-text">Nguyễn Văn A</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Full-Stack Developer & UI/UX Designer
          </p>
        </div>

        {/* Introduction */}
        <div className="animate-fade-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Tôi là một lập trình viên đam mê tạo ra những sản phẩm web đẹp mắt và hiệu quả. 
            Với hơn 5 năm kinh nghiệm, tôi luôn tìm kiếm những thử thách mới và cơ hội học hỏi.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.6s", opacity: 0 }}>
          <a href="#contact" className="btn-primary">
            Liên hệ với tôi
          </a>
          <a href="#projects" className="btn-glass">
            Xem dự án
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
