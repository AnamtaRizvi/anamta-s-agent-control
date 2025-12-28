import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AgentsSection from "@/components/AgentsSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [agentsAutoOpen, setAgentsAutoOpen] = useState(true);

  const handleAgentsClick = () => {
    setAgentsAutoOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onAgentsClick={handleAgentsClick} />
      <main>
        <Hero />
        <AgentsSection autoOpen={agentsAutoOpen} />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
