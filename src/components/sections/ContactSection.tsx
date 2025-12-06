import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Twitter, Send } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const contactInfo = [
  { icon: Mail, text: "email@example.com", href: "mailto:email@example.com" },
  { icon: Phone, text: "+84 123 456 789", href: "tel:+84123456789" },
  { icon: MapPin, text: "Hà Nội, Việt Nam", href: "#" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            <span className="gradient-text">Liên hệ</span> với tôi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hãy kết nối với tôi để thảo luận về dự án hoặc cơ hội hợp tác
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            <div className="glass-card h-full">
              <h3 className="text-2xl font-heading font-semibold mb-6">
                Thông tin liên hệ
              </h3>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((item) => (
                  <a
                    key={item.text}
                    href={item.href}
                    className="flex items-center gap-4 group text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span>{item.text}</span>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Mạng xã hội</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:scale-110 hover:bg-primary/20 transition-all"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <form onSubmit={handleSubmit} className="glass-card h-full">
              <h3 className="text-2xl font-heading font-semibold mb-6">
                Gửi tin nhắn
              </h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass border-0 bg-input focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="Nhập họ và tên..."
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass border-0 bg-input focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="Nhập email..."
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tin nhắn
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass border-0 bg-input focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                    placeholder="Nhập tin nhắn..."
                    required
                  />
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Gửi tin nhắn
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
