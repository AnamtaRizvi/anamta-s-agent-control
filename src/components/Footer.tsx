const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cosmic-purple to-cosmic-blue flex items-center justify-center">
              <span className="text-sm font-bold font-display text-white">A</span>
            </div>
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Anamta Rizvi. All rights reserved.
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Built with ❤️ and a lot of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
