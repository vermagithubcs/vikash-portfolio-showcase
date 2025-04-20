import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SocialLinks from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";
import { CircleArrowDown, Briefcase, Mail, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Footer from "@/components/Footer";

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
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-blue-100">
      <Navbar />
      
      {/* Hero Section */}
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

      {/* About Section with Image */}
      <section className="py-20 section" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <User className="w-6 h-6 text-purple-600" />
              <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Developer working"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  I specialize in creating responsive and user-friendly web applications using modern frontend technologies. Currently expanding my expertise into backend development to become a well-rounded full-stack developer.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-purple-600 hover:bg-purple-700">Download CV</Button>
                  <Button variant="outline">Read More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-20 section bg-purple-50/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Images</h2>
          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {[
                "photo-1488590528505-98d2b5aba04b",
                "photo-1461749280684-dccba630e2f6",
                "photo-1531297484001-80022131f5a1"
              ].map((id, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="m-1">
                    <CardContent className="p-4">
                      <img
                        src={`https://images.unsplash.com/${id}`}
                        alt={`Featured work ${index + 1}`}
                        className="rounded-lg w-full h-48 object-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 section" id="works">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="w-6 h-6 text-purple-600" />
              <h2 className="text-3xl font-bold text-gray-800">My Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Web Development",
                  description: "Modern web applications using React and TypeScript",
                  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                },
                {
                  title: "Frontend Design",
                  description: "Responsive and user-friendly interfaces",
                  image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                },
                {
                  title: "Full Stack Projects",
                  description: "End-to-end web solutions",
                  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                }
              ].map((project, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="mb-2">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 section bg-purple-50/50" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Mail className="w-6 h-6 text-purple-600" />
              <h2 className="text-3xl font-bold text-gray-800">Contact Me</h2>
            </div>
            <p className="text-gray-600 mb-8">Let's build something amazing together!</p>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
