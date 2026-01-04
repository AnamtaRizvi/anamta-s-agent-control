import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import resumePDF from "@/assets/Anamta_Rizvi_AI_Resume.pdf";

interface NavbarProps {
  onAgentsClick: () => void;
}

const Navbar = ({ onAgentsClick }: NavbarProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect bg-bg-card">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
              <span className="text-lg font-bold font-display text-white">A</span>
            </div>
            <span className="text-lg font-display font-semibold text-text-primary hidden sm:block">
              Anamta Rizvi
            </span>
          </div>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("hero")} 
              className="nav-link text-sm font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => {
                onAgentsClick();
                scrollToSection("agents");
              }} 
              className="nav-link text-sm font-medium"
            >
              Agents
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className="nav-link text-sm font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="nav-link text-sm font-medium"
            >
              Contact
            </button>
          </div>

          {/* Right side: Theme Toggle + Resume Button */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button 
              className="bg-gradient-to-r from-accent-primary to-accent-secondary hover:opacity-90 transition-opacity text-white font-medium"
              onClick={() => window.open(resumePDF, "_blank")}
            >
              <FileText className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
