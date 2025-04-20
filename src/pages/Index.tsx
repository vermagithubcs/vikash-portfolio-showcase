import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SocialLinks from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";
import { CircleArrowDown, Briefcase, Mail, User } from "lucide-react";
import Navbar from "@/components/Navbar";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    gsap.from(".hero-content", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(".section", {
      scrollTrigger: {
        trigger: ".section",
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Navbar />
      <main className="container mx-auto px-4 py-16" id="home">
        <div className="max-w-3xl mx-auto text-center hero-content">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">Vikash</h1>
          <p className="text-xl text-gray-600 mb-6">
            Frontend Developer | Learning Backend Development
          </p>
          <p className="text-gray-600 mb-8">
            Passionate frontend developer expanding my skills into backend development.
            Let's build something amazing together!
          </p>
          <CircleArrowDown className="w-8 h-8 mx-auto text-gray-400 animate-bounce" />
          <SocialLinks />
        </div>
      </main>

      <section className="py-20 section bg-white/50" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <User className="w-6 h-6 text-purple-600" />
              <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              I specialize in creating responsive and user-friendly web applications using modern frontend technologies. Currently expanding my expertise into backend development to become a well-rounded full-stack developer.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 section bg-purple-50/50" id="works">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="w-6 h-6 text-purple-600" />
              <h2 className="text-3xl font-bold text-gray-800">My Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Project 1</h3>
                <p className="text-gray-600">Description of your amazing project goes here.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Project 2</h3>
                <p className="text-gray-600">Description of your amazing project goes here.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 section bg-white/50" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <Mail className="w-6 h-6 text-purple-600" />
              <h2 className="text-3xl font-bold text-gray-800">Contact Me</h2>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
