import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 px-4">
      <div className="glass-card max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
          © {currentYear} • Thiết kế với{" "}
          <Heart className="w-4 h-4 text-destructive fill-current" /> bởi{" "}
          <span className="gradient-text font-semibold">Nguyễn Văn A</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
