import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/anamta-rizvi-491bb523a/" },
  { icon: Github, label: "GitHub", href: "https://github.com/AnamtaRizvi/" },
  { icon: Mail, label: "Email", href: "mailto:rizvianamta4@gmail.com" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-bg-page">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            <span className="cosmic-gradient-text">Let's Connect</span>
          </h2>
          <p className="text-text-secondary mb-12 max-w-lg mx-auto">
            Interested in working together or just want to say hi? 
            I'd love to hear from you.
          </p>

          {/* Main CTA */}
          <div className="cosmic-border rounded-2xl p-8 mb-8">
            <Mail className="w-12 h-12 text-accent-primary mx-auto mb-4" />
            <h3 className="font-display font-bold text-xl text-text-primary mb-2">
              Get in Touch
            </h3>
            <p className="text-text-secondary mb-6">
              Drop me an email and I'll get back to you as soon as possible.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-accent-primary to-accent-secondary hover:opacity-90 text-white px-8"
              onClick={() => window.location.href = "mailto:rizvianamta4@gmail.com"}
            >
              <Send className="w-4 h-4 mr-2" />
              Send Email
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="w-12 h-12 rounded-xl bg-bg-subtle flex items-center justify-center text-text-muted transition-all hover:bg-bg-subtle/80 hover:text-accent-primary"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Footer Note */}
          <p className="text-text-muted text-sm mt-12">
            Based in New Jersey, USA • Open to relocate • Remote-friendly
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
