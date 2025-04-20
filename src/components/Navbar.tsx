
import { Home, User, Briefcase, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "works", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-purple-600">V.</div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection("home")}
              className={cn(
                "rounded-full",
                activeSection === "home" && "bg-purple-100 text-purple-600"
              )}
            >
              <Home className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection("about")}
              className={cn(
                "rounded-full",
                activeSection === "about" && "bg-purple-100 text-purple-600"
              )}
            >
              <User className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection("works")}
              className={cn(
                "rounded-full",
                activeSection === "works" && "bg-purple-100 text-purple-600"
              )}
            >
              <Briefcase className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection("contact")}
              className={cn(
                "rounded-full",
                activeSection === "contact" && "bg-purple-100 text-purple-600"
              )}
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
