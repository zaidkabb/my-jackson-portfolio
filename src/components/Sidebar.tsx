import { Home, User, Briefcase, Code, Mail, Menu, X, GraduationCap, Building2, Newspaper } from "lucide-react";
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
    { icon: Code, label: "Skills", href: "#skills" },
    { icon: GraduationCap, label: "Education", href: "#education" },
    { icon: Building2, label: "Experience", href: "#experience" },
    { icon: Briefcase, label: "Work", href: "#work" },
    { icon: Newspaper, label: "Blog", href: "#blog" },
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
        className={`fixed left-0 top-0 h-full w-72 bg-sidebar-background border-r border-sidebar-border transition-transform duration-300 z-40 shadow-xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full py-8 px-6">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-28 h-28 rounded-full overflow-hidden mb-4 ring-4 ring-primary/20 shadow-lg transition-transform hover:scale-105 duration-300">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-xl font-bold text-foreground mb-1">Jackson Ford</h2>
            <p className="text-xs text-primary font-medium uppercase tracking-widest">
              UI/UX Designer
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Philippines
            </p>
          </div>

          <Separator className="mb-6" />

          {/* Navigation */}
          <nav className="flex-1 space-y-1 overflow-y-auto">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-sidebar-foreground hover:text-primary hover:bg-sidebar-accent rounded-lg transition-all duration-200 group"
              >
                <item.icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          <Separator className="my-6" />

          {/* Footer */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              © 2024 Jackson Ford
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              All rights reserved
            </p>
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
