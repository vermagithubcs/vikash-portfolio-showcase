
import SocialLinks from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Vikash</h1>
          <p className="text-xl text-gray-600 mb-6">
            Frontend Developer | Learning Backend Development
          </p>
          <p className="text-gray-600 mb-8">
            Passionate frontend developer expanding my skills into backend development.
            Let's build something amazing together!
          </p>
          <Button className="mb-8">Contact Me</Button>
          <SocialLinks />
        </div>
      </main>
    </div>
  );
};

export default Index;
