import { Home, User, Briefcase, Code, Mail, Menu, X, GraduationCap, Building2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import profileImage from "@/assets/profile-professional.jpg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: User, label: "About", href: "#about" },
    { icon: Briefcase, label: "Services", href: "#services" },
    { icon: GraduationCap, label: "Education", href: "#education" },
    { icon: Building2, label: "Experience", href: "#experience" },
    { icon: Code, label: "Work", href: "#work" },
    { icon: Mail, label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-72 bg-sidebar-background border-r border-sidebar-border transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full py-12 px-8">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-12">
            <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 ring-1 ring-border transition-transform hover:scale-105 duration-300">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-2">Zaid Fuad</h2>
            <p className="text-xs text-primary font-medium uppercase tracking-[0.25em] mb-2">
              Software & AI Engineer
            </p>
            <p className="text-xs text-muted-foreground font-light">
              Asendorf, Germany
            </p>
          </div>

          <Separator className="mb-8 bg-border/50" />

          {/* Navigation */}
          <nav className="flex-1 space-y-2 overflow-y-auto">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="w-full flex items-center gap-4 px-5 py-3 text-sm text-sidebar-foreground hover:text-primary hover:bg-sidebar-accent rounded-sm transition-all duration-200 group font-medium"
              >
                <item.icon className="h-[18px] w-[18px] transition-transform group-hover:scale-110" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <Separator className="my-8 bg-border/50" />

          {/* Footer with Social Links */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-3">
              <a href="https://linkedin.com/in/zaid-fuad-243a27188" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-primary/5 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 group border border-border/30 hover:border-primary">
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://github.com/zaidfuad91" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-primary/5 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 group border border-border/30 hover:border-primary">
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="mailto:zaidfuad91@gmail.com" className="w-11 h-11 rounded-full bg-primary/5 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 group border border-border/30 hover:border-primary">
                <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground/70 font-light">Let's connect!</p>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
