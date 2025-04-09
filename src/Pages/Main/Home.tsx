import { About, Contact, Header, Hero, Projects } from "@/Components/Main";
import { Gradient, ThemeToggle } from "@/Components/UI";
import FeatureCard from "@/Components/UI/FeaturesCard";
import { useEffect, useRef } from "react";
import { Linkedin, Instagram, Twitter } from "lucide-react";
import Stack from "@/Components/Main/Stack";
import { motion } from "framer-motion";

const Home = () => {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    mainRef.current?.classList.add("scale-150", "opacity-50");
    const timeout = setTimeout(() => {
      mainRef.current?.classList.remove("scale-150", "opacity-50");
    }, -100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main
      ref={mainRef}
      className="relative dark:bg-black p-8 sm:pt-16 sm:px-16 transition-all duration-500"
    >
      <Header />
      <Gradient />
      <Hero />
      <About />
      {/* Features Section */}
      <section className="flex flex-col mt-20 max-w-7xl mx-auto px-4 sm:px-8 z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 z-10">
          What You'll Get
        </h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <FeatureCard
            icon="Code"
            title="Custom Development"
            description="Custom built solutions to meet your unique business needs."
          />
          <FeatureCard
            icon="Smartphone"
            title="Responsive Design"
            description="Your website will look great on any device, from desktop to mobile."
          />
          <FeatureCard
            icon="Rocket"
            title="Fast Performance"
            description="Optimized for speed to ensure a seamless user experience."
          />
        </motion.div>
      </section>

      <Stack />

      <Projects />
      <Contact />

      {/* Footer Section */}
      <footer className="flex mt-20 bg-blue-700 text-white dark:bg-gray-900 py-8 z-10">
        <div className="w-full px-4 sm:px-8 flex flex-row justify-between items-center z-20">
          <p className="text-sm">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>

          <div className="flex gap-4 z-10">
            <a
              href="https://www.linkedin.com/in/aniyajuwon-pelumi-a8168a296"
              target="_blank"
              className="text-white dark:text-blue-500"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/sm_art_n_interiors?igsh=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              className="text-white dark:text-blue-500"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://x.com/aniya_juwon"
              target="_blank"
              className="text-white dark:text-blue-500"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </footer>

      <ThemeToggle className="fixed bottom-5 right-5 sm:hidden hover:cursor-pointer" />
    </main>
  );
};

export default Home;
